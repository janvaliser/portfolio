import { memo } from "react";
import classes from "./page.module.scss";
import WhoAmI from "@/sections/home/WhoAmI/WhoAmI";

const Home = () => {
  return (
    <div className={classes.container}>
      <WhoAmI />
    </div>
  );
};

export default memo(Home);
