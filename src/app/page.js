import Hero from "@/Components/Hero";
import PackagesSection from "@/Components/PackagesSection";
import PopularDestinations from "@/Components/PopularDestinations";





export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
       <PackagesSection/>
      <PopularDestinations/>
     
    </div>
  );
}
