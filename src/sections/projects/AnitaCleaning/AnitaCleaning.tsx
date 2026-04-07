import { memo } from "react";
import classes from "./AnitaCleaning.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";

const AnitaCleaning = () => {
  return (
    <section className={classes.container}>
      <div className={classes.imageWrapper}>
        <Image
          src="/anita_cleaning.png"
          alt="AnitaCleaning project screenshots"
          draggable={false}
          fill
          sizes="60vw"
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.title}>
          <Typography variant="heading-1">Cleaning Business</Typography>
          <ProjectTag variant="responsive-web-app" color="--anita-cleaning" />
        </div>
        <Typography
          className={classes.details}
          variant="body-1"
          align="justify"
        >
          Anita Potisk Cleaning is a responsive website for a cleaning service
          based in Switzerland, designed to showcase services, customer
          testimonials, and a “Get in Touch” section for inquiries. I handled
          the design and frontend implementation, focusing on a responsive
          layout, and a minimalistic, professional look enhanced with Rive
          animations.
        </Typography>
      </div>
    </section>
  );
};

export default memo(AnitaCleaning);
