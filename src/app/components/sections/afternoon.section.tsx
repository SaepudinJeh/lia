import Image from "next/image";
import { Icon } from '@iconify/react';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] })


import Cloude1 from "@/assets/cloude/afternoon/cloude.svg";
import Cloude2 from "@/assets/cloude/afternoon/cloude_2.svg";
import Cloude3 from "@/assets/cloude/afternoon/cloude_3.svg";
import Cloude4 from "@/assets/cloude/afternoon/cloude_4.svg";
import { useState } from "react";

export default function AfternoonSection() {
    const [clickTime, setClickTime] = useState<boolean>(false);


    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-50 to-cyan-300 overflow-hidden p-4">
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1300" className="absolute top-5 right-0 md:w-44 w-36">
                <div className="animate-move-cloud-bounce">
                    <Image loading="lazy" src={Cloude4} alt="cloud-4" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="400" className="absolute top-0 left-0 md:w-44 w-24">
                <div className="animate-move-cloud">
                    <Image loading="lazy" src={Cloude1} alt="cloud-1" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay="400" className="absolute top-10 left-1/2 md:w-44 w-20">
                <div className="animate-move-cloud">
                    <Image loading="lazy" src={Cloude3} alt="cloud-3" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1000" className="absolute top-10 left-1/4 md:w-44 w-40">
                <div className="animate-move-cloud-bounce">
                    <Image loading="lazy" src={Cloude2} alt="cloud-2" width={200} height={100} />
                </div>
            </div>

            <div onClick={() => setClickTime(!clickTime)} className="" data-aos="fade-up" data-aos-duration="2000">
                <Icon icon="ph:clock-afternoon-duotone" className="text-7xl text-cyan-900" />
            </div>

            <div className="py-7 text-center text-sm flex flex-col items-center justify-center gap-y-1 text-cyan-900">
                { !clickTime ? (
                    <p data-aos="fade-up" data-aos-duration="1000" className={`${cinzel.className} font-extrabold text-2xl pb-4 duration-500`}>
                        Sore
                    </p>
                ): (
                    <p className={`${cinzel.className} font-extrabold text-2xl pb-4 duration-500 flex flex-col items-center justify-center gap-2`}>
                        <Icon icon="streamline:smiley-in-love-solid" />
                        Luvv u Cantikk 
                    </p>
                ) }


                { !clickTime ? (
                    <p className="font-extrabold">Selamat Sore Sayangg :)</p>
                ): null }

                <p className="text-xs text-cyan-600 py-20">
                    Tekan jamnya!
                </p>
            </div>
        </section>
    );
}


function Qoute({ text, gender }: { text: string, gender: "male" | "female" }) {
    return (
        <p className="relative py-3 w-full border-l-2 border-cyan-500 px-3 bg-cyan-200/70 italic text-xs my-3">
            <Icon icon="gravity-ui:quote-open" className="absolute top-2 left-1" />
            { text }
            <Icon icon={ gender === "male" ? "mdi:face-male-outline": "mdi:face-female-outline" } className="absolute bottom-1 right-1" />
        </p>
    )
}

