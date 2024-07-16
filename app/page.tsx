import Image from "next/image";
import SubNav from "./components/navigations/subNav";
import Burner from "./components/landingPage/LandingPage";

export default function Home() {
  return (
    <main className="flex text-sm min-h-screen flex-col h-fit w-full">
      <SubNav />
      <Burner />
    </main>
  );
}
