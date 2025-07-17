import Hero from "../components/Hero";
import Why from "../components/Why";
import How from "../components/How";
import Action from "../components/Action";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col gap-y-6">
      <Hero />
      <Why />
      <How />
      <Action />
      <Footer />
    </main>
  );
};

export default Home;
