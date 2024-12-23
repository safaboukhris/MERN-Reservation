import BoxInfo from "@/components/BoxInfo";
import Header from "../components/Header";
import ServicesHome from "@/components/ServicesHome";
import InfoHome from "@/components/InfoHome";
import ImagesHome from "@/components/ImagesHome";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Home = () => {
  return (
    <>
    <div  className="relative h-[800px] bg-cover bg-fixed"
        style={{ backgroundImage: "url('/home.jpg')", backgroundRepeat: 'no-repeat' }}>
      {/* Overlay noir */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenu */}
      <div className="relative z-10">
        <Header />
        <h1 className="text-white text-center text-7xl mb-[8%] mt-[6%]">RB COWORKING SPACE</h1>
        <p className="text-white text-center font-semibold mt-8  text-3xl w-[60%] mx-auto">
          RB Coworking Space est un espace de travail moderne situé à Teboulba, Monastir, conçu pour répondre aux besoins des professionnels, entrepreneurs, et travailleurs indépendants.
        </p>
        <p className="text-white text-center font-semibold mt-5  text-3xl w-[60%] mx-auto">
          Offrant une variété d'espaces, tels que des bureaux individuels, des salles de réunion et des chaises individuelles.
        </p>
      </div>
    </div>
    <BoxInfo />
    <div className="mt-[20vh]">
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
