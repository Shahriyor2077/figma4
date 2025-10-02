import { memo } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Trending from "./components/Trending/Trending";
import Creators from "./components/creators/Creators";

const App = () => {
  return (
    <div>
      <Header />
      <main className="bg-[#2B2B2B]">
        <Hero />
        <Trending />
        <Creators />
      </main>
    </div>
  );
};

export default memo(App);
