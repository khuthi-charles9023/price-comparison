
'use client'
import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/divider";
import { Button } from "@/components/ui/button";
import {  DrawerDemo } from "./solardetails";
import { InfiniteMovingCardsDemo } from "./infinite";


const  solarDetails= [
  {
      "name": "SunPower Maxeon 5",
      "price": "$500",
      "specs": "400W,Monocrystalline, 85% efficiency",
      "reliability": "High",
      "unsplash_url": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "LG NeON 2",
      "price": "$450",
      "specs": "380W, Monocrystalline, 65% efficiency",
      "reliability": "Medium",
      "unsplash_url": "https://plus.unsplash.com/premium_photo-1680206586349-ddf92488bbbe?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Canadian Solar",
      "price": "$320",
      "specs": "100W,Thin-Film, 18% efficiency",
      "reliability": "Low",
      "unsplash_url": "https://images.unsplash.com/photo-1631771819642-90cee9a2ccac?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "REC Alpha",
      "price": "$550",
      "specs": "420W, Monocrystalline, 99% efficiency",
      "reliability": "High",
      "unsplash_url": "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Trina Solar",
      "price": "$400",
      "specs": "330W, Monocrystalline, 45% efficiency",
      "reliability": "Medium",
      "unsplash_url": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Jinko Solar",
      "price": "$420",
      "specs": "360W, Monocrystalline, 50% efficiency",
      "reliability": "Medium",
      "unsplash_url": "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  }
]


export default function ResizableDemo() {
  return (
    <div className="flex flex-col rounded-lg border">
      {/* <div className="flex w-full mx-4 bg-slate-100 h-[800px] items-center justify-center p-6">
        <span className="font-semibold text-2xl">Solar Panels Comparison</span>
        <div>
          <Popover />
        </div>
      </div> */}
      <div className="grid gap-8 grid-cols-2 p-8">
        {solarDetails.map((item: any, index: number) => (
           <Card key={index} className="relative flex w-full h-60 rounded-lg p-4 shadow-md">
           <div className="flex-shrink-0 w-1/3">
             <img src={item.unsplash_url} alt={item.name} className="w-full h-full rounded-md border" />
           </div>
           <div className="flex flex-col justify-between ml-4 w-2/3">
             <div>
               <p className="font-semibold text-lg text-gray-800">Name: {item.name}</p>
               <p className="font-semibold text-lg text-blue-500">Specs: {item.specs}</p>
               <p className="font-semibold text-lg text-green-400">Price: {item.price}</p>
               <p className="font-semibold text-lg text-red-500">Reliability: {item.reliability}</p>
             </div>
             {/* Drawer at bottom right */}
             <div className="absolute bottom-0 right-0">
               <DrawerDemo />
             </div>
           </div>
         </Card>
        ))}
      </div>
      <Button
        className="w-56 bg-[#397dd1] rounded-xl text-white my-4"
        size="sm"
        variant="default"
      >
        Compare
      </Button>
      <div>
        <Card className="w-full h-56 rounded-lg mt-4">
          <div className="slideshow bg-[#09131F] flex h-full items-center justify-center p-6">
            <InfiniteMovingCardsDemo />
          </div>
        </Card>
      </div>
    </div>
  );
}
