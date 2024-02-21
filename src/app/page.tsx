import MapBox from "./components/map";
import ResizableDemo from "./components/pagedivider";

export default function Home() {
  return (
    <main className="  bg-gray-100/20  ">
      {/* <MapBox /> */}

      <ResizableDemo />

      <div className="flex h-full items-center justify-center p-6">
        <span className="font-semibold">Three</span>
      </div>
    </main>
  );
}
