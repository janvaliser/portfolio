"use client";

import { memo } from "react";
import classes from "./Grades.module.scss";
import Typography from "@/components/Typography/Typography";
import ProjectTag from "@/components/ProjectTag/ProjectTag";
import Image from "next/image";
import image1 from "../../../../public/grades_1.png";
import image2 from "../../../../public/grades_2.png";
import image3 from "../../../../public/grades_3.png";

import { BREAKPOINTS } from "@/styles/breakpoints";
import { motion, Variants } from "motion/react";

const Grades = () => {
  const easeOutStrong: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const easeOutSoft: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const imageStartDelay = 0.24;
  const imageStagger = 0.25;

  const imagesContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: imageStartDelay,
        staggerChildren: imageStagger,
      },
    },
  };

  const imageItem: Variants = {
    hidden: { opacity: 0, y: 25, rotateY: -28, rotateX: 8, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        opacity: { duration: 0.46, ease: easeOutSoft },
        y: { duration: 0.72, ease: easeOutStrong },
        rotateY: { duration: 0.82, ease: easeOutStrong },
        rotateX: { duration: 0.78, ease: easeOutStrong },
        scale: { duration: 0.7, ease: easeOutSoft },
      },
    },
  };

  const imageCount = 3;
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
        className={classes.imageWrapper}
        variants={imagesContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className={classes.image1} variants={imageItem}>
          <Image
            src={image1}
            alt="Grades project screenshot 1"
            draggable={false}
            priority
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 33vw, 15vw`}
          />
        </motion.div>

        <motion.div className={classes.image2} variants={imageItem}>
          <Image
            src={image2}
            alt="Grades project screenshot 2"
            draggable={false}
            priority
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 33vw, 15vw`}
          />
        </motion.div>

        <motion.div className={classes.image3} variants={imageItem}>
          <Image
            src={image3}
            alt="Grades project screenshot 3"
            draggable={false}
            priority
            sizes={`(max-width: ${BREAKPOINTS.xs}px) 33vw, 15vw`}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={classes.description}
        variants={descriptionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className={classes.title} /* variants={descriptionItem} */>
          <motion.div variants={descriptionItem}>
            <Typography variant="heading-1">Grades</Typography>
          </motion.div>

          <motion.div variants={descriptionItem}>
            <ProjectTag variant="mobile-app" color="--grades" />
          </motion.div>
        </motion.div>

        <motion.div variants={descriptionItem}>
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Grades);
