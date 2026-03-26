import { memo } from "react";
import classes from "./page.module.scss";
import Grades from "@/sections/projects/Grades/Grades";

const Projects = () => {
  return (
    <div className={classes.container}>
      <Grades />
    </div>
  );
};

export default memo(Projects);
