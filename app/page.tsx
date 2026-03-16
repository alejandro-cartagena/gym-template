import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppFeatures from "@/components/sections/AppFeatures";
import Programs from "@/components/sections/Programs";
import Faq from "@/components/sections/Faq";
import MyTransformation from "@/components/sections/MyTransformation";
import Testimonials from "@/components/sections/Testimonials";
import WhyMe from "@/components/sections/WhyMe";
import Marquee from "@/components/sections/Marquee/Marquee";
import TextMarquee from "@/components/sections/Marquee/TextMarquee";
import Credibility from "@/components/sections/Credibility/Credibility";

// Different Versions of the Hero Section
import HeroV2 from "@/components/sections/Hero/HeroV2";

// Different Versions of the Why Me Section
import WhyMeV2 from "@/components/sections/WhyMe/WhyMeV2";
import WhyMeV3 from "@/components/sections/WhyMe/WhyMeV3";
// Different Versions of the Features Section
import FeaturesV2 from "@/components/sections/Features/FeaturesV2";

// Different Versions of the App Features Section
import AppFeaturesV2 from "@/components/sections/AppFeatures/AppFeaturesV2";

import GoogleMarquee from "@/components/sections/Marquee/GoogleMarquee";
import OurCoaches from "@/components/sections/OurCoaches/OurCoaches";
import Masonry from "@/components/sections/Masonry/Masonry";
import ClassSchedule from "@/components/sections/ClassSchedule/ClassSchedule";
import AboutV2 from "@/components/sections/About/AboutV2";


export default function Home() {
  return (
    <div>
      {/* <Hero /> */}
      <HeroV2 />
      {/* <HeroV2 /> */}
      <TextMarquee />
      <Credibility />
      <AboutV2 />
      <WhyMeV3 />
      <OurCoaches />
      <ClassSchedule />
      {/* <WhyMe /> */}
      {/* <WhyMeV2 /> */}
      {/* <Features /> */}
      {/* <AppFeaturesV2 /> */}
      <GoogleMarquee />
      <Programs />
      <Masonry />
      {/* <About /> */}
      {/* <MyTransformation /> */}
      {/* <Marquee /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
    </div>
  );
}
