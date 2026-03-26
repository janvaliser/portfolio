import { memo } from "react";
import classes from "./page.module.scss";
import Typography from "@/components/Typography/Typography";

const Projects = () => {
  return (
    <div className={classes.container}>
      <Typography variant="heading-1">Projects</Typography>
    </div>
  );
};

export default memo(Projects);
