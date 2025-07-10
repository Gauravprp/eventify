import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
// import Checklist from '../components/Checklist';
import Faq from '../components/Faq';
import About from '../components/HomeAbout';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    <About />
      <Packages />
      {/* <Checklist /> */}
      <Faq />
    </>
  );
}
