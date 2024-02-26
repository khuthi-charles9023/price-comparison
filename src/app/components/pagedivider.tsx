import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/divider";
import { Button } from "@/components/ui/button";


const  solarDetails= [
  {
      "name": "SunPower Maxeon 5",
      "price": "$500",
      "power_output": "400W",
      "reliability": "High",
      "unsplash_url": "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "LG NeON 2",
      "price": "$450",
      "power_output": "380W",
      "reliability": "Medium",
      "unsplash_url": "https://plus.unsplash.com/premium_photo-1680206586349-ddf92488bbbe?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Canadian Solar",
      "price": "$400",
      "power_output": "350W",
      "reliability": "Low",
      "unsplash_url": "https://images.unsplash.com/photo-1631771819642-90cee9a2ccac?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "REC Alpha",
      "price": "$550",
      "power_output": "420W",
      "reliability": "High",
      "unsplash_url": "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Trina Solar",
      "price": "$380",
      "power_output": "330W",
      "reliability": "Medium",
      "unsplash_url": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
      "name": "Jinko Solar",
      "price": "$420",
      "power_output": "360W",
      "reliability": "Medium",
      "unsplash_url": "https://images.unsplash.com/photo-1545208942-e1c9c916524b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
  }
]


export default function ResizableDemo() {
  return (
    <div className="flex rounded-lg border">
      <div className="flex w-96 mx-4 bg-slate-100  h-[800px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </div>
      <div className="grid">
        <div className="flex rounded-[54px] bg-[#09131F] h-full w-[768px] grid grid-cols-2 gap-16 items-center justify-center p-16">
          {solarDetails.map((item: any) => (
            <Card className="flex w-72 h-40 rounded-[30px]  p-5">
              {" "}
              <img src={item.unsplash_url} className="w-20 h-28 rounded-[20px] border border-black"/>
              {/* <p className="font-medium"></p> */}
              <div className="pl-4">
              <p className="font-medium text-muted-foreground">
                {item.name}
              </p>
              <p className=" rounded-lg px-2 text-muted-foreground">
                {item.price}
              </p>
              <p className="text-muted-foreground">
                {item.power_output}
              </p>
              <p className=" text-muted-foreground">
                Reliability : {item.reliability}
                </p>
                </div>
            </Card>
          ))}
        </div>
        <Button
          className="w-56 bg-[#09131F] rounded-xl text-white my-4"
          size={"sm"}
          variant={"default"}
        >
          Compare
        </Button>
        <div>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Three</span>
          </div>
        </div>
      </div>
    </div>
  );
}
