import { Navbar } from "@/components/Shared/Navbar";
import React from "react";
import { FirstBlock } from "./components/FirstBlock";
import { SliderBrands } from "./components/SliderBrands";
import { Features } from "./components/Features";
import { OurFleet } from "./components/OurFleet/OurFleet";
import { DriveToday } from "./components/DriveToday";
import { Footer } from "./components/Footer";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div>
      <Navbar />
      <Separator />
      <FirstBlock />
      <SliderBrands />
      <Separator />
      <Features />
      <Separator />
      <OurFleet />
      <Separator />
      <DriveToday />
      <Footer />
    </div>
  );
}
