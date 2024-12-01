import Header from "../components/Header"


const Home = () => {
  return (
    <>
    <Header/>
     <div
        className="h-[550px] bg-cover bg-center text-white flex justify-center items-center"
        style={{ backgroundImage: "url('/slide1.jpg')" }}
      >
        
        <div className="text-center">
          <p className="text-5xl text-white font-[YujiMai]"><span className="text-[#D1B59D]">UN MEILLEUR ENVIRONEMENT </span> POUR TRAVAILLER </p>
          <p className="text-lg mt-8 font-[YujiMai]">Le partage et l'échange sont notre devise. Rejoignez notre communauté et tentez l'expérience Workzone... </p>
          <p className="text-xl mt-8 font-[YujiMai] font-extrabold">Chez <span className="text-[#D1B59D]">RB coworking space</span></p>
       </div>
        
      </div>
  </>
  )
}

export default Home
