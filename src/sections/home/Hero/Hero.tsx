"use client";

import Typography from "@/components/Typography/Typography";
import classes from "./Hero.module.scss";
import { motion, Variants } from "motion/react";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useEffect } from "react";

const Hero = () => {
  const { rive, RiveComponent } = useRive({
    src: "/rive/avatar.riv",
    stateMachines: "State Machine",
    autoplay: false,

    layout: new Layout({
      fit: Fit.Cover,
    }),
  });

  useEffect(() => {
    if (!rive) return;

    const timer = setTimeout(() => {
      rive.play();
    }, 1250);

    return () => clearTimeout(timer);
  }, [rive]);

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

  const riveVariants: Variants = {
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

      <motion.div className={classes.rive} variants={riveVariants}>
        <RiveComponent />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
