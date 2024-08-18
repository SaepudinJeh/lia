"use client";

import { useEffect } from "react";
import AOS from "aos";

import 'aos/dist/aos.css';

import Lia from "@/assets/lia-vector.png";
import Image from "next/image";
import MorningSection from "./components/sections/morning.section";
import NoonSection from "./components/sections/noon.section";
import NightSection from "./components/sections/night.section";
import AfternoonSection from "./components/sections/afternoon.section";
import EndSection from "./components/sections/end.section";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <main className="relative flex min-h-screen items-center justify-center w-full bg-white">
      <div className="max-w-[30rem] w-full flex flex-col items-center justify-center">

        <div className="min-h-screen w-full flex flex-col items-center justify-center">

          <div className="relative">
            <div className="w-40 h-40 aspect-auto overflow-hidden rounded-full border-2 border-gray-400" data-aos="fade-up">
              <Image src={Lia} alt="Liaa" width={500} height={500} className="w-36 object-cover object-left-top pl-3 pt-2" priority />
            </div>
            <div className="absolute -right-20 -top-20" data-aos="fade-up" data-aos-delay="700">
              <div className="relative">
                <Icon icon="fxemoji:rightthoughtbubble" className="text-black text-9xl" />
                <p className="absolute top-9 left-9 text-xs text-center font-extrabold text-gray-600">Pengen <br /> Gacoan :D</p>
              </div>
            </div>
          </div>
        </div>

        <MorningSection />
        <NoonSection />
        <AfternoonSection />
        <NightSection />
        <EndSection />
      </div>
    </main>
  );
}
