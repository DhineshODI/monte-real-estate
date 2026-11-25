import { useLayoutEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap, ScrollTrigger, RM } from "./motion";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Services from "./components/Services";
import Path from "./components/Path";
import Advantages from "./components/Advantages";
import PropertyTypes from "./components/PropertyTypes";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import VideoBannerSection from "./components/VideoBannerSection";

export default function App() {
  useLayoutEffect(() => {
    let lenis, raf;
    if (!RM) {
      lenis = new Lenis({ lerp: 0.09 });
      lenis.on("scroll", ScrollTrigger.update);
      raf = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }
    ScrollTrigger.refresh();
    return () => {
      if (raf) gsap.ticker.remove(raf);
      lenis && lenis.destroy();
    };
  }, []);

  return (
    <>
      <Hero />
      <VideoBannerSection />
      <Portfolio />
      <About />
      <Services />
      <Path />
      <Advantages />
      <PropertyTypes />
      <Faq />
      <Footer />
    </>
  );
}
