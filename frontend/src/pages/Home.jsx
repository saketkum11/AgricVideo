import { HeroSection, Recommendation } from "../service";

const Home = () => {
  return (
    <div className=" w-full max-w-full bg-cover  min-h-screen bg-no-repeat">
      <section>
        <HeroSection />
      </section>
      <section className="pl-24 mt-24">
        <Recommendation />
      </section>
    </div>
  );
};

export default Home;
