import { useState } from "react";
import Navbar from "./components/Navbar";
import Globe from "./components/Globe";
import { Play } from "lucide-react";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#020617]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center,#0f172a 0%,#020617 60%,#000000 100%)",
        }}
      />

      {!started ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#020617]/95 backdrop-blur-md">
          <div className="text-center px-6">
            <h1 className="mb-4 text-4xl font-bold text-white">
              🌍 Radio Garden
            </h1>

            <p className="mb-10 text-gray-300 text-lg">
              Discover and listen to radio stations from around the world.
            </p>

            <button
              onClick={() => setStarted(true)}
              className="flex items-center gap-3 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-green-600 mx-auto"
            >
              <Play className="h-6 w-6 fill-white" />
              Tap to Play
            </button>
          </div>
        </div>
      ) : (
        <>
          <Navbar />

          <main className="absolute inset-0 pt-20">
            <Globe />
          </main>
        </>
      )}
    </div>
  );
}