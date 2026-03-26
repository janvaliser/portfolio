import { memo } from "react";
import classes from "./page.module.scss";
import Typography from "@/components/Typography/Typography";

const Home = () => {
  return (
    <div className={classes.container}>
      <Typography variant="heading-1">Home</Typography>
    </div>
  );
};

export default memo(Home);
