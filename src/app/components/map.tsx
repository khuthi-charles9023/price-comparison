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

const SearchTab = ({
  query,
  handleInputChange,
  suggestions,
  handleResultSelect,
}: any) => {
  const [min, setMin] = useState<number>(10); // Provide a default value (e.g., 0)
  const [max, setMax] = useState<number>(20); // Provide a default value (e.g., 0)
  const [width, setWidth] = useState<number>(5); // Provide a default value (e.g., 0)

  const handleApply = (
    minValue: number,
    maxValue: number,
    maxWidth: number
  ) => {
    // Update the min and max values
    setMin(isNaN(minValue) ? 0 : minValue);
    setMax(isNaN(maxValue) ? 0 : maxValue);
    setWidth(maxWidth);
  };

  return (
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
  );
};

const MapBox = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  // this is setting up the location to London (initial location)
  const [lng] = useState(-0.2);
  const [lat] = useState(51.5);
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
  const [min, setMin] = useState<number>(10); // Provide a default value (e.g., 0)
  const [max, setMax] = useState<number>(20); // Provide a default value (e.g., 0)

  const [maxWidth, setWidth] = useState<number>(20); // Provide a default value (e.g., 0)

  return (
    <div className="flex px-6 space-x-8">
      <div className=" flex w-1/2 lg:relative fixed z-10 w-full justify-between m-16 lg:m-0">
        <SearchTab
          // handleInputChange={handleInputChange}
          // handleResultSelect={handleResultSelect}
          query={query}
          suggestions={suggestions}
          min={min}
          max={max}
          maxWidth={maxWidth}
        />
      </div>

      <div className="w-1/2">
        <div className="bg-black w-[300px] h-[800px]"></div>
      </div>
    </div>
  );
};

export default MapBox;
