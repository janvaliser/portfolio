"use client";

import { memo } from "react";
import classes from "./CacheOut.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";
import desktopImage from "../../../../public/cacheout_desktop.png";
import mobileImage from "../../../../public/cacheout_mobile.png";
import { BREAKPOINTS } from "@/styles/breakpoints";
import { motion, Variants } from "motion/react";
import { useIsMobile } from "@/hooks/useBreakpoint";

const CacheOut = () => {
  const isMobile = useIsMobile();

  const easeOutStrong: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const easeOutSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const imageStartDelay = 0.24;
  const imageStagger = 0.2;

  const imagesContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: imageStartDelay,
        staggerChildren: imageStagger,
      },
    },
  };

  const desktopItem: Variants = {
    hidden: {
      opacity: 0,
      x: "3%",
      y: 20,
      rotateZ: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: isMobile ? -5 : -7.5,
      transition: {
        opacity: { duration: 0.46, ease: easeOutSoft },
        y: { duration: 0.72, ease: easeOutStrong },
        scale: { duration: 0.7, ease: easeOutSoft },
        rotateZ: { duration: 0.82, ease: easeOutStrong },
      },
    },
  };

  const mobileItem: Variants = {
    hidden: {
      opacity: 0,
      x: "-2.5%",
      y: 20,
      rotateZ: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 5,
      transition: {
        opacity: { duration: 0.46, ease: easeOutSoft },
        y: { duration: 0.72, ease: easeOutStrong },
        scale: { duration: 0.7, ease: easeOutSoft },
        rotateZ: { duration: 0.82, ease: easeOutStrong },
      },
    },
  };

  const imageCount = 2;
  const textStartDelay = imageStartDelay + imageStagger * imageCount;
  const textStagger = 0.27;

  const descriptionContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: textStartDelay,
        staggerChildren: textStagger,
      },
    },
  };

  const descriptionItem: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOutSoft,
      },
    },
  };

  return (
    <section className={classes.container}>
      <motion.div
        className={classes.description}
        variants={descriptionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={classes.title}>
          <motion.div variants={descriptionItem}>
            <Typography variant="heading-1">CacheOut</Typography>
          </motion.div>

          <motion.div variants={descriptionItem}>
            <ProjectTag variant="responsive-web-app" color="--cacheout" />
          </motion.div>
        </div>
        <motion.div variants={descriptionItem}>
          <Typography
            className={classes.details}
            variant="body-1"
            align="justify"
          >
            CacheOut is a responsive web-based casino where I served as the
            designer and frontend lead. I worked in a team to implement games
            such as Rocket, Plinko, Mines, and Chicken, and integrated Stripe
            for user deposits to purchase in-game tokens for gambling. The
            project emphasizes responsive design and interactive gameplay, all
            in the pursuit of generational wealth.
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        className={classes.imageWrapper}
        variants={imagesContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={classes.desktopImage} variants={desktopItem}>
          <Image
            src={desktopImage}
            alt="Cacheout project desktop screenshot"
            draggable={false}
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 80vw, (max-width: ${BREAKPOINTS.xl}px) 60vw, 806px`}
          />
        </motion.div>

        <motion.div className={classes.mobileImage} variants={mobileItem}>
          <Image
            src={mobileImage}
            alt="Cacheout project mobile screenshot"
            draggable={false}
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 20vw, 192px`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(CacheOut);
