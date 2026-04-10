"use client";

import Typography from "@/components/Typography/Typography";
import classes from "./Hero.module.scss";
import { motion, Variants } from "motion/react";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.section
      className={classes.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className={classes.text}>
        <motion.span variants={textVariants}>
          <Typography className={classes.heyText} variant="heading-1">
            Hey, I&apos;m
          </Typography>
        </motion.span>

        <motion.span variants={textVariants}>
          <Typography variant="heading-1" color="--primary">
            Jan Vališer
          </Typography>
        </motion.span>

        <motion.span variants={textVariants}>
          <Typography variant="heading-2">Mobile developer</Typography>
        </motion.span>
      </div>

      <motion.div className={classes.image} variants={imageVariants} />
    </motion.section>
  );
};

export default Hero;
