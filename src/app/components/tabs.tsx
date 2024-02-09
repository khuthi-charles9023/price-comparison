import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LocationCard } from "./LocationCard";
import { Filters } from "./filters";


type TabProps = {
  query: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  suggestions: any[];
  handleResultSelect: (result: any, polygons: any) => Promise<void>;
  minSize: number;
  maxSize: number;
  maxWidth: number;
  handleApply: any
};


export function Tab({
  query,
  handleInputChange,
  suggestions,
  handleResultSelect, 
  minSize,
  maxSize,
  maxWidth,
  handleApply
}: TabProps) {
  return (
    <Tabs defaultValue="account" className="w-[400px]  ">
      <div className="text-lg py-2 font-medium leading-none tracking-tight">
        Create Search
      </div>
      <TabsList className="grid  w-full grid-cols-2">
        <TabsTrigger value="account">Location</TabsTrigger>
        <TabsTrigger value="password">Filters</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <LocationCard
          query={query}
          handleInputChange={handleInputChange}
          suggestions={suggestions}
          handleResultSelect={handleResultSelect}
          minSize={minSize}
          maxSize={maxSize}
          maxWidth={maxWidth}
          handleApply={handleApply}
        />
       
      </TabsContent>
      <TabsContent value="password">
        <Filters />
      </TabsContent>
    </Tabs>
  );
}
