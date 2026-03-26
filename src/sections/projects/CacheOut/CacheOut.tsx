import { memo } from "react";
import classes from "./CacheOut.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";

const CacheOut = () => {
  return (
    <section className={classes.container}>
      <div className={classes.description}>
        <div className={classes.title}>
          <Typography variant="heading-1">CacheOut</Typography>
          <ProjectTag variant="responsive-web-app" color="--cacheout" />
        </div>
        <Typography variant="body-1" align="justify">
          CacheOut is a responsive web-based casino where I served as the
          designer and frontend lead. I worked in a team to implement games such
          as Rocket, Plinko, Mines, and Chicken, and integrated Stripe for user
          deposits to purchase in-game tokens for gambling. The project
          emphasizes responsive design and interactive gameplay, all in the
          pursuit of generational wealth.
        </Typography>
      </div>
      <div className={classes.imageWrapper}>
        <Image
          src="/cacheout.png"
          alt="CacheOut project screenshots"
          draggable={false}
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default memo(CacheOut);
