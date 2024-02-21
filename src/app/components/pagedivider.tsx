import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/divider";

export default function ResizableDemo() {
  return (
    <div className="flex rounded-lg border">
      <div className="flex w-[100px] bg-slate-100  h-[800px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </div>
      <div className="flex rounded-xl  bg-[#09131F] h-full w-full grid grid-cols-3 gap-4  items-center justify-center p-6">
        {["1", "2", "3", "4", "5"].map((e: any) => (
          <Card className="w-56 h-56 rounded-lg">
            {" "}
            <p className="font-medium">Solar Panel {e} </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
