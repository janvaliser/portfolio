import { memo } from "react";
import classes from "./page.module.scss";
import Typography from "@/components/Typography/Typography";

const CV = () => {
  return (
    <div className={classes.container}>
      <Typography variant="heading-1">CV</Typography>
    </div>
  );
};

export default memo(CV);
