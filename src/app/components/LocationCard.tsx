import * as React from "react";
import {
  Card,
  CardContent, 
} from "@/components/ui/card";
 
import LocationsSearch from "./location";


interface LocationCardProps {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: any[]; // Adjust the type as per your data structure
  handleResultSelect: (result: any, polygons: any) => Promise<void>;
  minSize: number;
  maxSize: number;
  handleApply: () => void;
}

export function LocationCard({
  query,
  handleInputChange,
  suggestions,
  handleResultSelect,
  minSize, maxSize, handleApply
}: LocationCardProps) {
  return (
    <Card className="mx-auto py-6  w-full h-full max-w-[400px] rounded-2xl">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <LocationsSearch
              query={query}
              handleInputChange={handleInputChange}
              suggestions={suggestions}
              handleResultSelect={handleResultSelect}
              minSize={minSize}
              maxSize={maxSize} 
              handleApply={handleApply}

           />
           
          </div>
        </form>
      </CardContent>
      
    </Card>
  );
}
