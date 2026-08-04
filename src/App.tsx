import { useState } from "react";
import Navbar from "./components/Navbar";
import Globe from "./components/Globe";
import { Play } from "lucide-react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#020617]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center,#0f172a 0%,#020617 60%,#000000 100%)",
        }}
      />

      <Navbar />

      <main className="absolute inset-0 pt-20">
        <Globe started={started} />
      </main>

      {!started && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="text-center">

            <h1 className="mb-4 text-5xl font-bold text-white">
              RadioFyy
            </h1>

            <p className="mb-10 text-xl text-gray-300">
              Explore radio stations from every country
            </p>

            <button
              onClick={() => setStarted(true)}
              className="rounded-full bg-green-500 px-10 py-5 text-xl font-bold text-white transition hover:bg-green-600"
            >
              <Play className="mr-3 inline h-6 w-6 fill-white" />
              Tap to Play
            </button>

          </div>
        </div>
      )}
    </div>
  );
}