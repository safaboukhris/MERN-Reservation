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
