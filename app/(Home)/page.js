import Head from "next/head";
import MainContent from "./_components";
import Navbar from "@/components/common/Navbar";
export default async function Root() {
  return (
    <div className="relative">
      <Navbar/>
      <MainContent/>
    </div>
  );
}
