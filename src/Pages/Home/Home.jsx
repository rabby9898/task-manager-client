import Banner from "../../Components/Banner/Banner";
import BenefitsContent from "../../Components/Benefits/BenefitsContent";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <BenefitsContent></BenefitsContent>
      <Footer></Footer>
    </div>
  );
};

export default Home;
