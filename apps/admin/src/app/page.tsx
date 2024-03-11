import { Card } from "@repo/ui/card";
import { LineCharts } from "./components/Charts/line-chart";
import { Piechart } from "./components/Charts/pie-chart";
import { BarChartComp } from "./components/Charts/bar-chart";
import { RadarCharts } from "./components/Charts/radar-chart";
import { RadialChart } from "./components/Charts/radial-chart";
export default function Page(): JSX.Element {
  return (
    <main className="min-h-screen">
      <div className="grid lg:flex gap-4 lg:justify-around justify-center py-12">
        <div className="w-[90vw] lg:w-[25%] h-[30vh] lg:h-[38vh] bg-[#3A5A40] border-2 border-[#588157] rounded-xl grid items-center p-4 gap-2">
          <span className="uppercase font-semibold">
            User Growth
          </span>
          <div className="border-2 border-[#588157] rounded-lg">
            <LineCharts  />
          </div>
        </div>
        <div className="w-[90vw] lg:w-[25%] h-[30vh] lg:h-[38vh] bg-[#3A5A40] border-2 border-[#588157] rounded-xl grid items-center p-4 gap-2">
          <span className="uppercase font-semibold">
            User Posts by Category
          </span>
          <Piechart/>
          <div className="grid relative bottom-10">
            <div className="flex gap-2">
              <span className="text-[7px]">
                1. Vehiculos
              </span>
              <span className="text-[7px]">
                2. Mascotas
              </span>
              <span className="text-[7px]">
                3. Articulos 
              </span>
              <span className="text-[7px]">
                4. Empleos
              </span>
              </div>
            <div className="flex gap-2">
              <span className="text-[7px]">
                5. servicios
              </span>
              <span className="text-[7px]">
                6. Otros
              </span>
              <span className="text-[7px]">
                7. Bienes Raices
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90vw] lg:w-[25%] h-[30vh] lg:h-[38vh] bg-[#3A5A40] border-2 border-[#588157] rounded-xl grid items-center p-4 gap-2">
          Posts
          <RadarCharts/>
        </div>
      </div>
      <div className="flex justify-around gap-10 mx-14">
        <div className="w-[50%] h-[40vh] bg-[#3A5A40] border-2 border-[#588157] rounded-xl flex items-center">
          {/* <BarChartComp/> */}
        </div>
        <div className="w-[50%] h-[40vh] bg-[#3A5A40] border-2 border-[#588157] rounded-xl">
          <RadialChart/>
        </div>
      </div>
    </main>
  );
}
