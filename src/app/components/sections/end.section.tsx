import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

import Master from "@/assets/master-vector.jpg";
import Link from "next/link";

export default function EndSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-900 via-blue-950 to-black overflow-hidden p-4">
            <div data-aos="fade-up">
                <Icon icon="emojione-monotone:birthday-cake" className="text-white text-6xl" />
            </div>

            <div data-aos="fade-up-right" className="text-white text-center">
                <p className="my-10 font-extrabold">SELAMAT ULANG TAHUN SAYANG</p>

                <div className="text-sm leading-relaxed">
                    <p>Aku engga tau doa apa yang cocok buat ayang, tapi aku pengen ayang jadi diri sendiri. Lakuin hal yang ayang sukai. Selalu berbakti sama orang tua, kalo berbakti sama aku gampang nyusul kalau udah bareng.</p>

                    <p className="my-5">SEMOGA DAN SEMOGANYA KAMU SAYANG</p>

                    <Link href="https://bjirr.vercel.app/lya" target="_blank" className="text-[0.5rem]">Otww yang lain</Link>
                </div>
            </div>

            <div className="my-96 w-full flex flex-col items-center justify-center">
                <div className="relative">
                    <Image data-aos="fade-up-left" src={Master} alt="" className="rounded-full w-36" loading="lazy" />

                    <div data-aos="fade-right" data-aos-delay="500" className="absolute -left-20 -top-16">
                        <div className="relative font-extrabold text-center">
                            <Icon icon="noto:left-speech-bubble" className="text-9xl" />
                            <p className="absolute left-3.5 top-10 text-black text-xs w-24">Luvv u yahh sayang..</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}