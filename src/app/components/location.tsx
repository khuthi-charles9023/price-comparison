import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Geocode from "./map/geocode";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type LocationsSearchProps = {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: any[];
  handleResultSelect: (result: any, polygons: any) => void;
  minSize: number;
  maxSize: number;
  maxWidth: number;
  handleApply: (minValue: number, maxValue: number) => void;
 
};

export default function LocationsSearch({
  query,
  handleInputChange,
  suggestions,
  handleResultSelect,
  minSize,
  maxSize,
  maxWidth, 
  handleApply,
}: LocationsSearchProps) {
 

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label
            htmlFor="width"
            className="static  justify-left inset-0 my-0  left-0 top-0"
          >
            Within
          </Label>
          <Geocode
            value={query}
            onChange={handleInputChange}
            suggestions={suggestions}
            onSelect={handleResultSelect}
          />
          <div className="uppercase col-span-3 mx-auto items-center justify-center">
            OR
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Around</Label>
          <Input
            value={maxWidth}
            id="maxWidth"
            defaultValue="London"
            className="col-span-2 h-8"
            onChange={(event) =>
              handleApply(parseInt(event.target.value), maxWidth)
            }
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="minSize">Min. Size</Label>
          <Input
            id="minSize"
            value={minSize}
            onChange={(event) =>
              handleApply(parseInt(event.target.value), maxSize)
            }
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxSize">Max. Size</Label>
          <Input
            id="maxSize"
            value={maxSize}
            onChange={(event) =>
              handleApply(minSize, parseInt(event.target.value))
            }
            className="col-span-2 h-8"
          />
        </div>
        <CardFooter className="flex my-4 justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button onClick={() => handleApply(minSize, maxSize)}>Apply</Button>
     
      </CardFooter>
      </div>
    </div>
  );
}
