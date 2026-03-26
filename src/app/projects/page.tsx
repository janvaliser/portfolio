import { memo } from "react";
import classes from "./page.module.scss";
import Grades from "@/sections/projects/Grades/Grades";
import CacheOut from "@/sections/projects/CacheOut/CacheOut";

const Projects = () => {
  return (
    <div className={classes.container}>
      <Grades />
      <CacheOut />
    </div>
  );
};

export default memo(Projects);
