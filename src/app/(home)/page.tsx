import Hero from "@/sections/home/Hero/Hero";
import WhoAmI from "@/sections/home/WhoAmI/WhoAmI";
import { memo } from "react";
import classes from "./page.module.scss";

const Home = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <WhoAmI />
    </div>
  );
};

export default memo(Home);
