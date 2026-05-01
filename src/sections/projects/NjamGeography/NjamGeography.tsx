"use client";

import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Typography from "@/components/Typography/Typography";
import { BREAKPOINTS } from "@/styles/breakpoints";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import { memo } from "react";
import gameImage from "../../../../public/guess_the_landmark_game.png";
import menuImage from "../../../../public/guess_the_landmark_menu.png";
import classes from "./NjamGeography.module.scss";

const NjamGeography = () => {
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

  const menuItem: Variants = {
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
      rotateZ: -7.5,
      transition: {
        opacity: { duration: 0.46, ease: easeOutSoft },
        y: { duration: 0.72, ease: easeOutStrong },
        scale: { duration: 0.7, ease: easeOutSoft },
        rotateZ: { duration: 0.82, ease: easeOutStrong },
      },
    },
  };

  const gameItem: Variants = {
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
      rotateZ: -5,
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
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className={classes.title}>
          <motion.div variants={descriptionItem}>
            <Typography variant="heading-1">NJAM Geography</Typography>
          </motion.div>
          <motion.div variants={descriptionItem}>
            <ProjectTag variant="web-app" color="--njam-geography" />
          </motion.div>
        </div>
        <motion.div variants={descriptionItem}>
          <Typography
            className={classes.details}
            variant="body-1"
            align="justify"
          >
            Njam Geography is a responsive web app designed to help children
            learn geography in a gamified way. I contributed to the design and
            frontend implementation as part of a team project, creating game
            modes such as “Endless” and “Classic” (10-question) across
            categories like guessing countries by flags, identifying capitals
            from images, and trying to locate landmarks in a GeoGuesser-style
            format.
          </Typography>
        </motion.div>
      </motion.div>

      <motion.div
        className={classes.imageWrapper}
        variants={imagesContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div className={classes.menuImage} variants={menuItem}>
          <Image
            src={menuImage}
            alt="NjamGeography project menu screenshot"
            draggable={false}
            sizes={"80vw"}
          />
        </motion.div>

        <motion.div className={classes.gameImage} variants={gameItem}>
          <Image
            src={gameImage}
            alt="NjamGeography project gameplay screenshot"
            draggable={false}
            sizes={"80vw"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(NjamGeography);
