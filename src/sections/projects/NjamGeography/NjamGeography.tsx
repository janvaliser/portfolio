import { memo } from "react";
import classes from "./NjamGeography.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";

const NjamGeography = () => {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <div className={classes.title}>
          <Typography variant="heading-1">NJAM Geography</Typography>
          <ProjectTag variant="web-app" color="--njam-geography" />
        </div>
        <Typography variant="body-1" align="justify">
          Njam Geography is a responsive web app designed to help children learn
          geography in a gamified way. I contributed to the design and frontend
          implementation as part of a team project, creating game modes such as
          “Endless” and “Classic” (10-question) across categories like guessing
          countries by flags, identifying capitals from images, and trying to
          locate landmarks in a GeoGuesser-style format.
        </Typography>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src="/njam_geography.png"
          alt="NjamGeography project screenshots"
          draggable={false}
          fill
          sizes="60vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default memo(NjamGeography);
