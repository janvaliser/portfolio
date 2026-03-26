import { memo } from "react";
import classes from "./page.module.scss";
import Grades from "@/sections/projects/Grades/Grades";
import CacheOut from "@/sections/projects/CacheOut/CacheOut";
import AnitaCleaning from "@/sections/projects/AnitaCleaning/AnitaCleaning";
import NjamGeography from "@/sections/projects/NjamGeography/NjamGeography";

const Projects = () => {
  return (
    <div className={classes.container}>
      <Grades />
      <CacheOut />
      <AnitaCleaning />
      <NjamGeography />
    </div>
  );
};

export default memo(Projects);
