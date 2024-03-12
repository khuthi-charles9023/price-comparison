import MapBox from "./components/map";
import ResizableDemo from "./components/pagedivider";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 bg-gray-100/20">
  <p className="text-center py-6 text-4xl font-bold text-white p-4 bg-[#353ccf]">
    Solar Panels Comparison
  </p>


      <ResizableDemo />
    </main>
  );
}
