import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent, 
  CardFooter,
 
} from "@/components/ui/card";
 import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Ownership } from "./ownership";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

const properties = [
  {
    name: "AONB",
    enabled: false,
  },
  {
    name: "Ancient Woodland",
    enabled: false,
  },
  {
    name: "Biosphere Reserves",
    enabled: false,
  },
  {
    name: "Conservation Areas",
    enabled: false,
  },
  {
    name: "National Parks",
    enabled: false,
  },
  {
    name: "World Heritage Sites",
    enabled: false,
  },
];

const topographyOptions = [
  { value: "next", label: "Zone 1" },
  { value: "sveltekit", label: "Zone 2" },
  { value: "astro", label: "Zone 3" },
  { value: "nuxt", label: "Zone 3A" },
];

function SwitchButton({ title }: any) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">
        {title.name}
        <br />{" "}
        <p className="text-sm text-muted-foreground font-normal">
          {title.description}
        </p>
      </Label>
    </div>
  );
}

type CardProps = React.ComponentProps<typeof Card>;

function Constraints({ className, ...props }: CardProps) {
  return (
    <div className={cn("", className)} {...props}>
      <div className=" flex items-center space-x-2 rounded-md   my-4">
        <div className="flex-2 space-y-1">
          <p className="text-sm font-medium leading-none">Protexted Areas</p>
          <p className="text-sm text-muted-foreground">
            Protected areas are designated conserve natural and cultural
            resources, and recreation.
          </p>
        </div>

        <div className="w-fit bg-white">
          <Switch /> Apply All
        </div>
      </div>

      <div>
        {properties.map((name, index) => (
          <div
            key={index}
            className="mb-4 flex items-start pb-4 last:mb-0 last:pb-0"
          >
            <div className="space-y-1">
              <SwitchButton title={name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Filters() {
  return (
    <Card className="mx-auto py-6 w-full h-full max-w-[400px] rounded-2xl">
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex bg-white flex-col space-y-1.5">
              <Label htmlFor="name">Topography </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                  <SelectContent position="popper">
                    {topographyOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>

            <Ownership />
            <Constraints />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Cancel</Button>
        <Button>Apply</Button>
      </CardFooter>
    </Card>
  );
}
