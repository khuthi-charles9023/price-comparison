# Place this script in app/data/page.ts to get JSON results of the

```js
"use client";
"use client";
import JSZip from "jszip";
import { useEffect, useState } from "react";
import {  useRef } from "react";
import mapboxgl from "mapbox-gl";

interface Data {
  builtUpAreas: Record<string, string>[];
  builtUpExtents: Record<string, string>[];
  nonBuiltUpExtents: Record<string, string>[];
}

const cdnUrl = 'https://raw.githubusercontent.com/jonas-kgomo/land-data/main/OS_Open_Built_Up_Areas.zip';

export default function Data() {
  const [data, setData] = useState<Data>({
    builtUpAreas: [],
    builtUpExtents: [],
    nonBuiltUpExtents: []
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(cdnUrl);
        const stream = await response.blob();
        const zip = new JSZip();
        const loadedZip = await zip.loadAsync(stream);

        const fileNames: Record<string, string> = {
          builtUpAreas: "OS_Open_Built_Up_Areas.csv",
          builtUpExtents: "OS_Open_Built_Up_Extents.csv",
          nonBuiltUpExtents: "OS_Open_Non_Built_Up_Extents.csv"
        };

        const newData: Data = {
          builtUpAreas: [],
          builtUpExtents: [],
          nonBuiltUpExtents: []
        };

        for (const [key, fileName] of Object.entries(fileNames)) {
          const file = loadedZip.file(fileName);
          if (!file) {
            throw new Error(`Could not find "${fileName}" in the zip`);
          }
          const content = await file.async("text");
          const lines = content.split("\n");
          const headers = lines[0].split(",");
          const rows = lines.slice(1);

          const mappedData = rows.map((row) => {
            const values = row.split(",");
            const obj: Record<string, string> = {};
            headers.forEach((header, index) => {
              obj[header] = values[index];
            });
            return obj;
          });

          newData[key as keyof Data] = mappedData;
        }

        setData(newData);
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data.builtUpAreas.length || !data.builtUpExtents.length || !data.nonBuiltUpExtents.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <MapBox builtUpAreas={data.builtUpAreas} />
      <div>
      <h2>Built Up Areas</h2>
<pre>{JSON.stringify(data.builtUpAreas.slice(0, 3), null, 2)}</pre>
<h2>Built Up Extents</h2>
<pre>{JSON.stringify(data.builtUpExtents.slice(0, 3), null, 2)}</pre>
<h2>Non Built Up Extents</h2>
<pre>{JSON.stringify(data.nonBuiltUpExtents.slice(0, 3), null, 2)}</pre>

      </div>

          </div>
  );
}




const MapBox = ({ builtUpAreas }: { builtUpAreas: any[] }) => {
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/dark-v11");
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY!;
    if (!map.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: mapStyle,
        center: [0, 0],
        zoom: 6,
      });

      map.current.addControl(new mapboxgl.NavigationControl());

      map.current.on("load", () => {
        map.current!.addSource("builtUpAreas", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: builtUpAreas.map((area: { geometry: string }) => ({
              type: "Feature",
              properties: area,
              geometry: area.geometry ? JSON.parse(area.geometry.replace(/\\/g, '/') ): null,
            })),
          },
        });

        if (map.current!.areTilesLoaded()) {
         alert('Tiles loaded' )
       }  else console.log('Tiles not loaded')

       map.current!.addSource("testArea", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: [
                  [[0, 0], [10, 0], [10, 10], [0, 50], [0, 0]]
                ]
              }
            }
          ]
        }
      })
      map.current!.addLayer({
        id: "testArea",
        type: "fill",
        source: "testArea",
        paint: {
          "fill-color": "red"
        }
      });
        // map.current!.addLayer({
        //   id: "builtUpAreas",
        //   type: "fill",
        //   source: "builtUpAreas",
        //   paint: {
        //     "fill-color": "red",
        //      "fill-opacity": 0.8,
        //   },
        // });
      });
    }
  }, [builtUpAreas, mapStyle]);

  return (
    <div id="map">
      <div
        className="bg-white shadow-lg my-2 rounded-2xl"
        ref={mapContainer}
        style={{ width: 800, height: 800 }}
      ></div>
    </div>
  );
};


```
