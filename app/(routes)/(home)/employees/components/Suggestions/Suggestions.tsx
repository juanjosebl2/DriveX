import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import { suggestionsData } from "./Suggestions.data";
import { SuggestionsProps } from "./Suggestions.types";

export function Suggestions(props: SuggestionsProps) {
  const { setSelectedEmployed } = props;

  const handlerSelectEmployed = (id: number) => {
    setSelectedEmployed(id)
  }

  return (
    <div>
      <div className="mb-4 font-sans font-bold">Empleados</div>
      <div className="flex flex-col items-center justify-center gap-10 p-4 shadow-lg rounded-xl hover:shadow-lg">
        {suggestionsData.map((data) => (
          <div key={data.name} className="flex items-center gap-6">
            <Image
              src={data.photo}
              alt="employees"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex flex-col gap-4">
              <div className="font-bold">{data.name}</div>
              <div className="flex items-center gap-2">
                <GraduationCap />
                {data.experience}
              </div>
              <Button onClick={() => handlerSelectEmployed(data.id)} className="rounded-full">Seleccionar</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
