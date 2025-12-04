// import Home from "./pages/Home/page";
import CleanRisk from "./components/CleanRisk";
import DigitalWealthSection from "./components/DigitalWealthSection";
import AccountMonitor from "./sections/AccountMonitor";
import Banner from "./sections/Banner";
import Benefits from "./sections/Benefits";
import Framework from "./sections/Framework";
import Investment from "./sections/investment";
import Testimonials from "./sections/Testimonials";
import WealthManagement from "./sections/WealthManagement";

export default function Home() {
  return (
    <main>
      <Banner />
      <AccountMonitor />
      <CleanRisk />
      <WealthManagement />
      <Framework />
      <Investment />
      <Benefits />
      <Testimonials />
      <DigitalWealthSection
        title="Want to be part of this early on?"
        // description="Tradoo combines institutional principles with user controlled infrastructure to provide a stable foundation for long-term wealth."
        buttons={[
          {
            label: "Join Waitlist",
            href: "#",
            variant: "contrastdefault",
            size: "L",
            trailingIcon: true,
          },
          // {
          //   label: "Start With Your Risk Profile",
          //   href: "#",
          //   variant: "primarydefault",
          //   size: "L",
          // },
        ]}
      />
    </main>
  );
}
