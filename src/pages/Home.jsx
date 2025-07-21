import Hero from "../components/Hero";
import Why from "../components/Why";
import How from "../components/How";
import Action from "../components/Action";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import FAQ from "../components/FAQ";


const Home = () => {
  return (
    <main className="w-full h-full flex flex-col gap-y-6">
      <Hero />
      <Why />
      <How />
      <Reviews />
      <FAQ />
      <Action />
      <Footer />
    </main>
  );
};

export default Home;
