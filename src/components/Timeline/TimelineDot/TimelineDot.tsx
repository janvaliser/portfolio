import { Hexagon, Box, GraduationCap } from "lucide-react";
import classes from "./TimelineDot.module.scss";

export type TimelineDotIcon = "box" | "graduation-cap";

type TimelineDotProps = {
  icon: TimelineDotIcon;
};

const TimelineDot = ({ icon }: TimelineDotProps) => {
  const Icon = icon === "box" ? Box : GraduationCap;
  const size = icon === "box" ? 14 : 15;

  return (
    <div className={classes.container}>
      <Hexagon size={24} color="var(--primary)" fill="var(--primary)" />
      <Icon className={classes.icon} size={size} color="var(--on-primary)" />
    </div>
  );
};

export default TimelineDot;
