"use client"

import { Navbar } from "@/components/Shared/Navbar";
import { Separator } from "@/components/ui/separator";
import { Suggestions } from "./components/Suggestions";
import { CardDetails } from "./components/CardDetails";
import { useState } from "react";

export default function page() {

  const [selectedEmployed, setSelectedEmployed] = useState<Number>(1)

  return (
    <div>
      <Navbar />
      <Separator />
      <div className="flex flex-col gap-4 p-4 lg:flex-row lg:gap-12 lg:p-10">
        <div className="w-full lg:w-2/3">
          <CardDetails selectedEmployed={selectedEmployed} />
        </div>
        <div className="w-full lg:w-1/3">
          <Suggestions setSelectedEmployed={setSelectedEmployed}/>
        </div>
      </div>
    </div>
  );
}
