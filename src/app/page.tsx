import MapBox from "./components/map";
import ResizableDemo from "./components/pagedivider";

export default function Home() {
  return (
    <main className=" max-w-7xl mx-auto p-6  bg-gray-100/20  ">
      <p className="text-cente py-6 text-4xl font-bold">
       Price Comparison
      </p> 

      <ResizableDemo />
    </main>
  );
}
