// import Home from "./pages/Home/page";
import CleanRisk from "./components/CleanRisk";
import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Framework from "./sections/Framework";
import Investment from "./sections/investment";
import Testimonials from "./sections/Testimonials";
import WantPart from "./sections/WantPart";
import WealthManagement from "./sections/WealthManagement";

export default function Home() {
  return (
    <main>
      <Banner/>
      <CleanRisk/>
      <WealthManagement/>
      <Framework/>
      <Investment/>
      <Benefits/>
      <Testimonials/>
      <WantPart/>
    </main>
  );
}
