import { memo } from "react";
import classes from "./CacheOut.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";
import desktopImage from "../../../../public/cacheout_desktop.png";
import mobileImage from "../../../../public/cacheout_mobile.png";
import { BREAKPOINTS } from "@/styles/breakpoints";

const CacheOut = () => {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <div className={classes.title}>
          <Typography variant="heading-1">CacheOut</Typography>
          <ProjectTag variant="responsive-web-app" color="--cacheout" />
        </div>
        <Typography
          className={classes.details}
          variant="body-1"
          align="justify"
        >
          CacheOut is a responsive web-based casino where I served as the
          designer and frontend lead. I worked in a team to implement games such
          as Rocket, Plinko, Mines, and Chicken, and integrated Stripe for user
          deposits to purchase in-game tokens for gambling. The project
          emphasizes responsive design and interactive gameplay, all in the
          pursuit of generational wealth.
        </Typography>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.desktopImage}>
          <Image
            src={desktopImage}
            alt="Cacheout project desktop screenshot"
            draggable={false}
            priority
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 80vw, (max-width: ${BREAKPOINTS.xl}px) 52vw, 806px`}
          />
        </div>

        <div className={classes.mobileImage}>
          <Image
            src={mobileImage}
            alt="Cacheout project mobile screenshot"
            draggable={false}
            priority
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 20vw, 192px`}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(CacheOut);
