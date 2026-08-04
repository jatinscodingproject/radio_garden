import Navbar from "./components/Navbar";
import Globe from "./components/Globe";

export default function App() {
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
      <Navbar />
      <main className="absolute inset-0 pt-20">
        <Globe />
      </main>
    </div>
  );
}