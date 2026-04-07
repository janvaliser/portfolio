import { memo } from "react";
import classes from "./Grades.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";

const Grades = () => {
  return (
    <section className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src="/grades.png"
          alt="Grades project screenshots"
          draggable={false}
          fill
          priority
          sizes="40vw"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.title}>
          <Typography variant="heading-1">Grades</Typography>
          <ProjectTag variant="mobile-app" color="--grades" />
        </div>
        <Typography
          className={classes.details}
          variant="body-1"
          align="justify"
        >
          Grades is a cross-platform Flutter app used by staff of the
          Programming Methodologies Laboratory to manage subjects, exercises,
          and student grades. I redesigned and rebuilt their internal system
          from scratch, implementing features such as lab attendance tracking,
          exam scoring, and an activity feed showing all users actions.
        </Typography>
      </div>
    </section>
  );
};

export default memo(Grades);
