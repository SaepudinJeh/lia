"use client";

import { useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import Lia from "@/assets/lia-vector.png";
import { Icon } from "@iconify/react/dist/iconify.js";

// Lazy load sections with placeholders
const MorningSection = dynamic(() => import("./components/sections/morning.section"), { ssr: false, loading: () => <p>Loading Morning Section...</p> });
const NoonSection = dynamic(() => import("./components/sections/noon.section"), { ssr: false, loading: () => <p>Loading Noon Section...</p> });
const AfternoonSection = dynamic(() => import("./components/sections/afternoon.section"), { ssr: false, loading: () => <p>Loading Afternoon Section...</p> });
const NightSection = dynamic(() => import("./components/sections/night.section"), { ssr: false, loading: () => <p>Loading Night Section...</p> });
const EndSection = dynamic(() => import("./components/sections/end.section"), { ssr: false, loading: () => <p>Loading End Section...</p> });

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
              <Image src={Lia} alt="Liaa" width={500} height={500} layout="intrinsic" className="w-36 object-cover object-left-top pl-3 pt-2" priority />
            </div>
            <div className="absolute -right-20 -top-20" data-aos="fade-up" data-aos-delay="700">
              <div className="relative">
                <Icon icon="fxemoji:rightthoughtbubble" className="text-black text-9xl" />
                <p className="absolute top-9 left-9 text-xs text-center font-extrabold text-gray-600">Pengen <br /> Gacoan :D</p>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<p>Loading Sections...</p>}>
          <MorningSection />
          <NoonSection />
          <AfternoonSection />
          <NightSection />
          <EndSection />
        </Suspense>
      </div>
    </main>
  );
}
