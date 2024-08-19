import SongRequestForm from "@/components/SongRequestForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DJ Song Requests</h1>
      <SongRequestForm />
    </div>
  );
}
