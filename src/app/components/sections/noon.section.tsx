import Image from "next/image";
import { Icon } from '@iconify/react';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] })


import Cloude1 from "@/assets/cloude/noon/cloude.svg";
import Cloude2 from "@/assets/cloude/noon/cloude_2.svg";
import Cloude3 from "@/assets/cloude/noon/cloude_3.svg";
import Cloude4 from "@/assets/cloude/noon/cloude_4.svg";

export default function NoonSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-200/50 via-amber-300/70 to-cyan-50 overflow-hidden p-4">
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
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="400" className="absolute top-5 left-1/3 md:w-44 w-24">
                <div className="animate-move-cloud">
                    <Image loading="lazy" src={Cloude1} alt="cloud-1" width={200} height={100} />
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="3000" data-aos-delay="1000" className="absolute top-10 left-1/4 md:w-44 w-40">
                <div className="animate-move-cloud-bounce">
                    <Image loading="lazy" src={Cloude2} alt="cloud-2" width={200} height={100} />
                </div>
            </div>

            <div className="pt-32 md:pt-40 lg:pt-52" data-aos="fade-up" data-aos-duration="2000">
                <Icon icon="line-md:sun-rising-twotone-loop" className="text-7xl text-amber-700" />
            </div>

            <div className="py-7 text-center text-sm flex flex-col items-center justify-center gap-y-1 text-amber-900">
                <p data-aos="fade-up" data-aos-duration="1000" className={`${cinzel.className} font-extrabold text-2xl pb-4 text-amber-700`}>SIANG</p>
                
                <p className="font-extrabold">Selamat Siangg Sayang</p>

                <p>Siang ini panas sumpahh engga boong. dan aku melihatmu seperti es teh di angkringan dan legitnya seperti bakpia pathok 25</p>

                <p>Dan tingkahmu yang aku rasa mirip mojito rasa lemon ditambah biji selasih. Cukup menyegarkan untuk diminum siang-siang, sialnya aku dah beli teh poci 3 rebuan.</p>

                <p>Apa kamu ingat siang2 itu ketika membeli air mineral aku ambil Aqua karena itu yang aku lihat pertama kali</p>

                <Qoute text="Jangan yang ituu!" gender="female" />

                <Qoute text="Lah kenape seh?" gender="male" />

                <Qoute text="Biikott!" gender="female" />

                <p>Kamu ambil air mineral yang ada manis-manisnya lalu pergi ke kasir dan aku ditinggal. Aku ngedumel, </p>
                
                <Qoute text="Padahal kamu juga ada manis-manisnya, bahkan lebih manis yeuhh... -_-" gender="male" className="bg-cyan-50/40 border-cyan-600/20 text-cyan-800/80" />
            </div>
        </section>
    );
}


function Qoute({ text, gender, className }: { text: string, gender: "male" | "female", className?: string }) {
    return (
        <p data-aos="fade-right" className={`relative py-3 w-full border-l-2 bg-amber-100 border-amber-500 px-3 italic text-xs my-3 ${className}`}>
            <Icon icon="gravity-ui:quote-open" className="absolute top-2 left-1" />
            { text }
            <Icon icon={ gender === "male" ? "mdi:face-male-outline": "mdi:face-female-outline" } className="absolute bottom-1 right-1" />
        </p>
    )
}

