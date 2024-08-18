import Image from "next/image";
import { Icon } from '@iconify/react';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] })


import Cloude1 from "@/assets/cloude/morning/cloude.svg";
import Cloude2 from "@/assets/cloude/morning/cloude_2.svg";
import Cloude3 from "@/assets/cloude/morning/cloude_3.svg";
import Cloude4 from "@/assets/cloude/morning/cloude_4.svg";

export default function MorningSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-transparent to-amber-200/50 overflow-hidden px-4">
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="400" className="absolute top-0 left-0 md:w-44 w-24">
                <div className="animate-move-cloud">
                    <Image loading="lazy" src={Cloude1} alt="cloud-1" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1300" className="absolute top-5 right-0 md:w-44 w-36">
                <div className="animate-move-cloud-bounce">
                    <Image loading="lazy" src={Cloude4} alt="cloud-4" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1000" className="absolute top-10 left-1/4 md:w-44 w-40">
                <div className="animate-move-cloud-bounce">
                    <Image loading="lazy" src={Cloude2} alt="cloud-2" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="2000" data-aos-delay="400" className="absolute top-10 left-1/2 md:w-44 w-20">
                <div className="animate-move-cloud">
                    <Image loading="lazy" src={Cloude3} alt="cloud-3" width={200} height={100} />
                </div>
            </div>

            <div className="pt-32 md:pt-40 lg:pt-52" data-aos="fade-up" data-aos-duration="2000">
                <Icon icon="game-icons:heraldic-sun" className="text-7xl text-amber-900" />
                {/* <Icon icon="line-md:sun-rising-twotone-loop" className="text-7xl text-amber-900" /> */}
            </div>

            <div className="py-7 text-center text-amber-900 text-sm flex flex-col items-center justify-center gap-y-1">
                <p data-aos="fade-up" data-aos-duration="1000" className={`${cinzel.className} font-extrabold text-2xl pb-4`}>PAGI</p>

                <Qoute text="Wheyyy anjhgg... gimanee cara nyusun kata-kata yg bagoss." gender="male" />

                <p>Awokwokwok... maap-maap :)</p>

                <p>
                    Owh iyaaa... Selamat Pagi untuk 
                    <b className="font-extrabold text-lg up"> Lia </b> 
                    dan Lia-lia yang ada di bumi, sisanya teman-temanku yg bernama Bagus dan Bagas yang lainnya gampang nyusul.
                </p>

                <p>Pagi ini aku bangun lalu bernapas dan Lia pun begitu, hanya saja dia curhat padaku, katanya</p>

                <Qoute text="Anak cewek tidur jam segini udah panas kupingnya" gender="female" />

                <p>Kurang ajar yang bilang kek gituh terang-terangan ke Lia. Aku balas,</p>

                <Qoute text="Emang ada yg bilang ???" gender="male" />

                <p>Bersambung...</p>

                <p className="text-amber-900">------------------------------</p>
            </div>
        </section>
    );
}

function Qoute({ text, gender }: { text: string, gender: "male" | "female" }) {
    return (
        <p data-aos="fade-right" className="relative py-3 w-full border-l-2 border-amber-400 px-3 bg-amber-200/30 italic text-xs my-3">
            <Icon icon="gravity-ui:quote-open" className="absolute top-2 left-1" />
            { text }
            <Icon icon={ gender === "male" ? "mdi:face-male-outline": "mdi:face-female-outline" } className="absolute bottom-1 right-1" />
        </p>
    )
}
