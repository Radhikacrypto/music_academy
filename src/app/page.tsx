import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonial from "@/components/MusicSchoolTestimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/footer";
import Instructor from "@/components/instructor";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      < HeroSection/>
      < FeaturedCourses/>
     < WhyChooseUs />
     <MusicSchoolTestimonial/>
     < UpcomingWebinars/>
     < Instructor/>
     < Footer/>
    </main>
  );
}
