"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState, useEffect, useRef } from "react";
import mapboxgl, { accessToken } from "mapbox-gl";
import { Card } from "@/components/ui/card";
import ReactDOM from "react-dom";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import { generateRandomPolygons } from "./map/genPolygons";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Tab } from "./tabs";
import addMapLayers from "./map/maplayers";


const SearchTab = ({query,handleInputChange,suggestions,handleResultSelect  } : any) => {
 
  const [min, setMin] = useState<number>(10); // Provide a default value (e.g., 0)
  const [max, setMax] = useState<number>(20); // Provide a default value (e.g., 0)
  const [width, setWidth] = useState<number>(5); // Provide a default value (e.g., 0)

  const handleApply = (minValue: number, maxValue: number, maxWidth: number) => {
    // Update the min and max values
    setMin(isNaN(minValue) ? 0 : minValue);
    setMax(isNaN(maxValue) ? 0 : maxValue);
    setWidth(maxWidth); 
  };
  
 
 return(
<>
<Tab
          query={query}
          handleInputChange={handleInputChange}
          suggestions={suggestions}
          handleResultSelect={handleResultSelect}
          minSize={min} // Pass minSize as prop
          maxSize={max} // Pass maxSize as prop
          maxWidth={width}
          handleApply={handleApply}
      /> 

</>
  )};


const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  // this is setting up the location to London (initial location)
  const [lng] = useState(-0.2);
  const [lat] = useState(51.5);
  const mapStyle = "mapbox://styles/mapbox/satellite-v9";
  // mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11
  const [query, setQuery] = useState("");
  // when a user click
  const [suggestions, setSuggestions] = useState([]);
  const [zoom, setZoom] = useState(6);
  // State for isochrones data
  const [isochronesData, setIsochrones] = useState<any>(null);
  const geocoderRef = useRef<MapboxGeocoder | null>(null);
  // Use a ref to store the map instance
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [min, setMin] = useState<number>(10); // Provide a default value (e.g., 0)
  const [max, setMax] = useState<number>(20); // Provide a default value (e.g., 0)
 
  const [maxWidth, setWidth] = useState<number>(20); // Provide a default value (e.g., 0)
 
  // Declare the map variable outside the useEffect
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY as string;

  const handleResultSelect = async (
    result: any,
    polygons: any  ) => {
    const coordinates = result.geometry.coordinates;

    // Fetch isochrones data from API route
    try {
      const response = await fetch(
        `/api/isochrones?coordinates=${coordinates}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch isochrones");
      }

      const data = await response.json();
      const isochrones = data.isochrones;

      let map = mapRef.current;
      if (map) {
        setZoom(8);
        map.flyTo({ center: coordinates, zoom: 10 });
        setIsochrones(isochrones);

        addMapLayers(map, polygons, isochrones);

        // Render isochrones on the map
      }
    } catch (error) {
      console.error("Error fetching isochrones:", error);
      // Handle error
    }
  }; 

  let map: mapboxgl.Map;
  useEffect(() => {
  
    map = new mapboxgl.Map({
      container: mapContainer.current!,
      style: mapStyle,
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [-6.22, 49.53, 3.02, 58.84],
    });

    map.on("style.load", () => {
      map.addControl(new mapboxgl.NavigationControl());

      const polygons = generateRandomPolygons();

      addMapLayers(map, polygons, isochronesData);
      // addMapLayers(mapRef.current, polygons);

      // Add popup on hover
      const popup = new mapboxgl.Popup({
        closeButton: true,
        closeOnClick: true,
      });

      map.on("mouseenter", "randomPolygons", (e) => {
        map.getCanvas().style.cursor = "pointer";
        const feature = e.features?.[0];
        const title = feature?.properties?.title;
        const size = feature?.properties?.size;
        const popupContent = document.createElement("div");

        ReactDOM.render(
          <Card className="p-6 text-base text-gray-600 font-medium -m-6">
            Name: {title} <br />
            Size: {size}
          </Card>,
          popupContent
        );

        popup.setLngLat(e.lngLat).setDOMContent(popupContent).addTo(map);
      });

      map.on("mouseleave", "randomPolygons", () => {
        map.getCanvas().style.cursor = "pointer";
        popup.remove();
      });
    });

    mapRef.current = map; // Assign the map instance to the ref

    // geo encoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    geocoderRef.current = geocoder;
    // Get the geocoder control's container element
    const geocoderContainer = map
      .getContainer()
      .querySelector(".mapboxgl-ctrl-top-right");

    // Set the  display off for geocoder
    if (geocoderContainer) {
      console.log(geocoderContainer);
      (geocoderContainer as HTMLElement).style.display = "none";
    }

    geocoder.on("result", (event) => {
      setQuery(event.result.text);
      setSuggestions(event.features);
    });

    geocoder.on("results", (event) => {
      setSuggestions(event.features);
    });

    map.addControl(geocoder);

    return () => map.remove();
  }, [lng, lat, mapStyle, zoom]);

  const handleInputChange = (event: { target: { value: any } }) => {
    const input = event.target.value;
    setQuery(input);

    geocoderRef.current!.setInput(input); // Update the input of the geocoder
  };

  return (
    <div className="flex px-6 space-x-8">
      <div className=" flex w-[300px] lg:relative fixed z-10 w-full justify-between m-16 lg:m-0">
        <SearchTab handleInputChange={handleInputChange} handleResultSelect={handleResultSelect}  query={query}  suggestions={suggestions} min={min} max={max} maxWidth={maxWidth}/>
     
      </div>

      <div className="w-full">
        <div id="map">
          <div
            data-query={query}
            className="bg-white  w-[800px] h-[800px] md:w-[1100px] h-[800px]  shadow-lg my-2 rounded-2xl"
            ref={mapContainer}
          />
        </div>
      </div>
    </div>
  );
};

export default MapBox;


