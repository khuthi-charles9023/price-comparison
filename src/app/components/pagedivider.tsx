import { Card } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/ui/divider";
import { Button } from "@/components/ui/button";

export default function ResizableDemo() {
  return (
    <div className="flex rounded-lg border">
      <div className="flex w-96 mx-4 bg-slate-100  h-[800px] items-center justify-center p-6">
        <span className="font-semibold">One</span>
      </div>
      <div className="grid">
        <div className="flex rounded-2xl  bg-[#09131F] h-full w-full grid grid-cols-3 gap-4  items-center justify-center p-6">
          {["1", "2", "3", "4", "5"].map((e: any) => (
            <Card className="w-56 h-56 rounded-lg">
              {" "}
              <p className="font-medium">Solar Panel {e} </p>
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
