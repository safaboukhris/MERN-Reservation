import BoxInfo from "@/components/BoxInfo";
import Header from "../components/Header";
import ServicesHome from "@/components/ServicesHome";
import InfoHome from "@/components/InfoHome";
import ImagesHome from "@/components/ImagesHome";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
    <div  className="relative lg:h-[800px] bg-cover bg-fixed sm:h-[110vh]"
        style={{ backgroundImage: "url('/home.jpg')", backgroundRepeat: 'no-repeat' }}>
      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenu */}
      <div className="relative z-10">
        <Header />
        <motion.h1
        className="text-white text-center mb-[8%] mt-[6%] lg:text-6xl sm:text-3xl sm-md:text-xl"
        initial={{ opacity: 0, x: -200 }}  
        animate={{ opacity: 1, x: 0 }}     
        transition={{ duration: 2 }}       
      >
        RB COWORKING SPACE
      </motion.h1>
        <p className="text-white text-center font-semibold mt-8  lg:text-2xl w-[60%] mx-auto sm:text-md sm-md:text-md">
          RB Coworking Space est un espace de travail moderne situé à Teboulba, Monastir, conçu pour répondre aux besoins des professionnels, entrepreneurs, et travailleurs indépendants.
        </p>
        <p className="text-white text-center font-semibold mt-5  lg:text-2xl w-[60%] mx-auto sm:text-md sm-md:text-md">
          Offrant une variété d'espaces, tels que des bureaux individuels, des salles de réunion et des chaises individuelles.
        </p>
      </div>
    </div>
    <BoxInfo />
    <div className="lg:mt-[50vh] sm:mt-[60vh]">
      <ServicesHome />
    </div>
    <InfoHome />
    <ImagesHome />
    <Footer/>
    <ScrollToTopButton/>
  </>
  );
};

export default Home;
