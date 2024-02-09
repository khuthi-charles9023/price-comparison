
const addMapLayers = (map: any, polygons: any, isochronesData: any) => {
 // Check if the 'randomPolygons' source already exists
 if (!map.getSource("randomPolygons")) {
   // Add 'randomPolygons' source if it doesn't exist
   map.addSource("randomPolygons", {
     type: "geojson",
     data: {
       type: "FeatureCollection",
       features: polygons,
     },
   });
 }

 // Check if the 'randomPolygons' layer already exists
 if (!map.getLayer("randomPolygons")) {
   // Add 'randomPolygons' layer if it doesn't exist
   map.addLayer({
     id: "randomPolygons",
     type: "fill",
     source: "randomPolygons",
     paint: {
       "fill-color": "#088",
       "fill-opacity": 0.4,
     },
   });
 }

 // Check if the 'polygon-outlines' layer already exists
 if (!map.getLayer("polygon-outlines")) {
   // Add 'polygon-outlines' layer if it doesn't exist
   map.addLayer({
     id: "polygon-outlines",
     type: "line",
     source: "randomPolygons",
     paint: {
       "line-width": 0.2,
       "line-color": "#089",
     },
   });
 }

 // Check if the 'isochrones' source already exists
 if (!map.getSource("isochrones")) {
   // Add 'isochrones' source if it doesn't exist
   map.addSource("isochrones", {
     type: "geojson",
     data: isochronesData,
   });
 } else {
   // Update 'isochrones' source if it already exists
   map.getSource("isochrones").setData(isochronesData);
 }

 // Check if the 'isochrones' layer already exists
 if (!map.getLayer("isochrones")) {
   // Add 'isochrones' layer if it doesn't exist
   map.addLayer({
     id: "isochrones",
     type: "fill",
     source: "isochrones",
     paint: {
       "fill-color": "teal",
       "fill-opacity": 0.6,
     },
   });

 }
};

export default addMapLayers;
