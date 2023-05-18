import useSWR from 'swr'

import { Post, PostsWrapper } from "@/components/features"
import { Member, TeamWrapper } from "@/components/team"
import { ResponseInstagram } from '@/types/Instagram'
import { fetcher } from "@/utils/Fetcher"

import Video from "@/components/video"

export default function Home() {
    const { data, error, isLoading } = useSWR<ResponseInstagram>('/api/posts', fetcher)

    return (
        <>
            <section className="w-full h-[700px]">
                <h1 className="max-w-xl sm:max-w-5xl py-12 text-center mx-auto text-4xl sm:text-7xl font-bold">Transforma tu
                    <span className="bg-gradient-to-r from-[#663177] to-[#C63F7B] bg-clip-text text-transparent bg-size-200 animate-gradient-fastest"> visión</span> en
                    <span className="bg-gradient-to-r from-[#FF0F7B] to-[#F89B29] bg-clip-text text-transparent bg-size-200 animate-gradient-fast"> realidad</span> con nuestra
                    <span className="bg-gradient-to-r from-[#B429F9] to-[#26C5F3] bg-clip-text text-transparent bg-size-200 animate-gradient"> creatividad</span>
                </h1>
                <Video className="h-[769px] w-[1200px] mx-auto md:rounded-2xl  object-cover" src="/videos/bg-1.mp4" />
            </section>
            <section className="w-full h-[300px] sm:h-[400px] bg-black py-8" />
            <section className="w-full h-fit bg-black text-white pb-8">
                    <h1 className="text-center mx-auto px-2 text-2xl sm:text-5xl font-bold max-w-lg">Convierte tus 
                        <span className="bg-gradient-to-r from-[#663177] to-[#C63F7B] bg-clip-text text-transparent bg-size-200 animate-gradient-fastest"> ideas</span> en contenido visual y auditivo de 
                        <span className="bg-gradient-to-r from-[#B429F9] to-[#26C5F3] bg-clip-text text-transparent bg-size-200 animate-gradient"> alta calidad</span>
                    </h1>
            </section>
            <PostsWrapper>
                {data?.response && data.response.data.slice(0, 6).map((data, index) => (
                    <Post 
                        key={index}
                        image={data.media_url}
                        href={data.permalink}
                        title={new Date(data.timestamp).toLocaleDateString("es-ES")}
                        description={data.caption} 
                    />
                ))}
            </PostsWrapper>
            <section className="text-center p-6 bg-black text-white">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[#FF0F7B] to-[#F89B29] bg-clip-text text-transparent bg-size-200 animate-gradient-fast">
                   The New Flex Studio Record
                </h1>
                <p className="max-w-2xl mx-auto py-5">The New Flex Studio nace de la iniciativa de ayudar a la gente a producir sus ideas audiovisuales y graficas, nuestra misión consiste en traer todo tipos de trabajos audiovisuales y grafica de la mente de nuestro cliente para apoyarles tanto en el proceso creativo como el proceso logico.</p>
                <div className="bg-white max-w-fit mx-auto py-1 px-2 rounded-lg">
                    <button className="text-lg font-medium bg-black text-transparent my-1 bg-gradient-to-r from-[#B429F9] to-[#26C5F3] bg-clip-text bg-size-200 hover:bg-pos-100">Contactar </button>
                </div>
            </section>
            <section className="relative h-[400px] overflow-hidden">
                <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"/>
                <img className="w-full object-cover object-center h-full" src="https://i.imgur.com/zVIhXfS.jpeg" alt="" />
            </section>
            <section>
                <h1 className="text-center mx-auto px-2 text-2xl sm:text-5xl font-bold max-w-lg my-8">Nuestro
                        <span className="bg-gradient-to-r from-[#663177] to-[#C63F7B] bg-clip-text text-transparent bg-size-200 animate-gradient-fastest"> equipo</span> de
                        <span className="bg-gradient-to-r from-[#B429F9] to-[#26C5F3] bg-clip-text text-transparent bg-size-200 animate-gradient"> profesionales</span>
                </h1>
                <TeamWrapper>
                    <Member 
                        image="https://res.cloudinary.com/www-gastronomic-social-es/image/upload/v1663443883/PABLOGOTOO_osx7gq.jpeg"
                        job="CEO Fundador"
                        name="Pablo"
                    />
                    <Member 
                        image="https://res.cloudinary.com/www-gastronomic-social-es/image/upload/v1663443756/LAURA-GOTO10_nqvipx.jpeg"
                        job="Jefa de Relaciones"
                        name="Laura "
                    />
                    <Member 
                        image="https://res.cloudinary.com/www-gastronomic-social/image/upload/v1667337391/images/IMG_1006_ioeqmq.jpeg"
                        job="Jefe Redactor"
                        name="Nahuel"
                    />
                    <Member 
                        image="https://res.cloudinary.com/www-gastronomic-social/image/upload/v1667587040/images/RADI2-2_iz8blw.jpg"
                        job="Community Manager"
                        name="Radoslav"
                    />
                </TeamWrapper>
            </section>
           
        </>
    )
}
