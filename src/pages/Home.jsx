import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import ServicesPreview from "../components/ServicesPreview";import ProjectsPreview from "../components/ProjectsPreview";


function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
      
    </div>
  );
}

export default Home;