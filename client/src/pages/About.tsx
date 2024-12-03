import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate()
    const handleClick = () => {navigate(-1)}
    
    return (
        <>
            <button onClick={handleClick}><IoIosArrowRoundBack className="mt-10 ml-10 text-[#C7AD86]" size={40} /></button>
            <h1 className="text-4xl mt-4 font-[YujiMai] font-extrabold text-center text-[#C7AD86]">Qui sommes nous</h1>
            <p className="text-center mt-8 mx-16"> <span className="text-xl font-[kablammo] text-[#C7AD86]"> RB Coworking Space </span>est un espace de travail moderne situé à Teboulba, Monastir, conçu pour répondre aux besoins des professionnels, entrepreneurs, et travailleurs indépendants. Offrant une variété d'espaces, tels que des bureaux individuels, des salles de réunion et des chaises individuelles, RB Coworking Space propose un environnement collaboratif, équipé d'infrastructures modernes, idéal pour stimuler la productivité et favoriser les échanges. Avec une vision axée sur l'innovation et la flexibilité, RB Coworking Space vise à devenir un lieu incontournable pour le travail et la créativité dans la région. </p>
            <div className="mx-40 my-20">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb1.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb2.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb3.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb5.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb9.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb13.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                        <CarouselItem className="basis-1/3">
                            <img src="/rb14.jpg" alt="rb-coworkingspace" className="h-[400px] w-full object-cover rounded-lg"/>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </>
    )
}

export default About
