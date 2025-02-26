import FAQComponent from "./FaqComponent";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import Navbar from "./Navbar";
import ReferBenefits from "./ReferBenefit";
import ReferSteps from "./ReferContainer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <MainContainer />
      <ReferSteps />
      <ReferBenefits />
      <FAQComponent />
      <Footer />
    </div>
  );
};

export default Body;
