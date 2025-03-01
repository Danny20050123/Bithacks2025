import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Team from "../components/Team";
import Tracks from "../components/Tracks";
import About from "../components/About";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Tracks />
      <Faq />
      <Team />
      <Footer />
    </>
  );
}
