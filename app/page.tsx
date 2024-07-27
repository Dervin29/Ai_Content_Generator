import Footer from "./dashboard/_components/Footer";
import HeroSection from "./dashboard/_components/HeroSection";
import Navbar from "./dashboard/_components/Navbar";


export default function Home() {
  return (
    <div className=" max-w-screen-lg mx-auto flex flex-col  gap-6 md:gap-8 lg:gap-28 justify-center p-2 md:p-5 ">
      <Navbar />
      <HeroSection/> 
      <Footer/>
    </div>
  );
}