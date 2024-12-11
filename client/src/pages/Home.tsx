import BoxInfo from "@/components/BoxInfo";
import Header from "../components/Header";
import ServicesHome from "@/components/ServicesHome";
import InfoHome from "@/components/InfoHome";
import ImagesHome from "@/components/ImagesHome";

const Home = () => {
  return (
    <>
      <div className="relative h-[800px]  bg-cover" style={{ backgroundImage: "url('/coworking7.jpg')" ,  backgroundRepeat: 'no-repeat'}}>
        <Header />
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <div className="text-center">
            <p className="text-5xl text-white font-[YujiMai] font-bold">
              <span className="text-[#ff861a]">UN MEILLEUR ENVIRONEMENT </span> POUR TRAVAILLER
            </p>
            <p className="text-lg mt-8 font-[YujiMai] text-white font-bold">
              Le partage et l'échange sont notre devise. Rejoignez notre communauté et tentez l'expérience{" "}
              <span className="text-[#ff861a] font-extrabold">RB coworking space...</span>
            </p>
          </div>
        </div>
      </div>
      <BoxInfo />
      <div className="mt-[17%]">
        <ServicesHome />
      </div>
      <InfoHome/>
      <ImagesHome/>
    </>
  );
};

export default Home;
