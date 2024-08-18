import { Icon } from '@iconify/react/dist/iconify.js';
import Starfield from 'react-starfield';
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] })

export default function NightSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-300 via-cyan-900 to-cyan-900 overflow-hidden p-4">
            <Starfield
                starCount={5000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
            />

            <div className="pt-32 md:pt-40 lg:pt-52" data-aos="fade-up" data-aos-duration="2000">
                <Icon icon="line-md:sunny-outline-to-moon-loop-transition" className="text-7xl text-cyan-50" />
            </div>

            <div className="py-7 text-center text-sm flex flex-col items-center justify-center gap-y-2 text-cyan-50">
                <p data-aos="fade-up" data-aos-duration="1000" className={`${cinzel.className} font-extrabold text-2xl py-4`}>MALAM</p>

                <div className='flex flex-col items-center justify-center gap-4'>
                    <p className="font-extrabold">Selamat Malam Sayang</p>

                    <Quote text='Aku engga sempurna seperti perempuan yang lain, aku banyak kurangnya. Aku engga pantes buatmu, kenapa engga nyari yang lain aja' gender='female' />

                    <p>Itu katamu dan aku engga peduli, kata orang <span className='font-extrabold italic uppercase'>&quot;Apabila suatu perkara itu telah sempurna makan akan keliatan kurangnya&quot;</span> aku juga banyak kurangnya, itu hal bagus karena kamu aku jadi punya teman hidup.</p>

                    <p>Ketika ada didekatmu aku seperti anak kecil, bermain-main tanpa henti, tanpa ada pikiran apapun. Yang dipikirkan hanya ingin bersenang-senang.</p>

                    <p>Apa kamu juga merasakan apa yang aku rasakan?</p>

                    <p>Kalau iya kenapa kamu terus berfikir seperti itu?</p>

                    <p>Apa kamu tidak bersenang-senang?</p>

                    <div>
                        <Quote text='Aku juga engga berhak atas kamu, tapi nyatanya hatiku lebih berhak' gender='male' />

                        <Quote text='Yang membuatku berbeda dari yang lain, karena aku berhasil menyukaimu' gender='male' />

                        <Quote text='Sampai kapan pun aku engga akan menyukaimu, jadi jangan salahin aku kalo aku mencintaimu' gender='male' />
                    </div>

                    <p className='italic text-xs'>Ketawamulah yang membuatku selalu tau, mana yang aku maksud</p>
                </div>
                
                <div className='py-96 text-[0.6rem]'>
                    <p>Tidak ada masalah denganmu, yang jadi masalah ketika kamu adalah cowok</p>
                </div>

                <div className='py-96 text-[0.6rem]'>
                    <p>Terima kasih karena kamu Asep punya teman baru</p>
                </div>
            </div>
        </section>
    );
}

function Quote({ text, gender }: { text: string, gender: "male" | "female" }) {
    return (
        <p data-aos="fade-left" className="relative py-3 w-full border-l-4 border-cyan-500 px-4 bg-cyan-200/90 italic text-xs my-3 text-cyan-900 font-semibold">
            <Icon icon="gravity-ui:quote-open" className="absolute top-2 left-1" />
            { text }
            <Icon icon={ gender === "male" ? "mdi:face-male-outline": "mdi:face-female-outline" } className="absolute bottom-1 right-1" />
        </p>
    )
}
