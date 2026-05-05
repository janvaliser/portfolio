"use client";

import Typography from "@/components/Typography/Typography";
import classes from "./WhoAmI.module.scss";
import classNames from "classnames";
import Image from "next/image";
import headshot from "../../../../public/headshot.png";
import { motion, Variants } from "motion/react";
import { BREAKPOINTS } from "@/styles/breakpoints";

const techStack = [
  { name: "Flutter", src: "/technologies/flutter.svg" },
  { name: "React", src: "/technologies/react.svg" },
  { name: "Next.js", src: "/technologies/next_js.svg" },
  { name: "TypeScript", src: "/technologies/typescript.svg" },
  { name: "Rive", src: "/technologies/rive.svg" },
  { name: "Express", src: "/technologies/express.svg" },
  { name: "MongoDB", src: "/technologies/mongo_db.svg" },
  { name: "PostgreSQL", src: "/technologies/postgre.svg" },
];

const WhoAmI = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <section className={classes.container}>
      <motion.div
        className={classes.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.6,
        }}
      >
        <div className={classNames(classes.center, classes.item)}>
          <Typography align="center" variant="title">
            Mobile & <br />
            Web Developer
          </Typography>
        </div>

        <motion.div
          className={classNames(classes.about, classes.item)}
          variants={{
            hidden: { opacity: 0, x: -25 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Typography variant="title">Who am I?</Typography>
          <Typography variant="body-1">
            Frontend & mobile developer based in Slovenia, currently a computer
            science student focused on building modern, visually polished apps
            with smooth, thoughtful animations.
          </Typography>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -25 },
            visible: { opacity: 1, y: 0 },
          }}
          className={classNames(classes.headshotWrapper, classes.item)}
        >
          <Image
            src={headshot}
            alt="Headshot of me"
            draggable={false}
            className={classes.headshot}
            fill
            sizes={`(max-width: ${BREAKPOINTS.sm}px) 100vw, 33vw`}
          />
        </motion.div>
        <motion.div
          className={classNames(classes.education, classes.item)}
          variants={{
            hidden: { opacity: 0, x: 25 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Typography variant="title">Education</Typography>
          <ul role="list">
            <li>
              <Typography variant="body-1">
                Master&apos;s in computer Science
              </Typography>
              <Typography color="--text-02" variant="body-2">
                (2025 - Present)
              </Typography>
            </li>
            <li>
              <Typography variant="body-1">
                Bachelor&apos;s in computer Science
              </Typography>
              <Typography color="--text-02" variant="body-2">
                (2022 - 2025)
              </Typography>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={classNames(classes.stack, classes.item)}
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Typography variant="title">Tech Stack</Typography>
          <ul role="list" className={classes.stackIcons}>
            {techStack.map((entry) => (
              <li key={entry.name}>
                <Image
                  src={entry.src}
                  alt={entry.name}
                  width={32}
                  height={32}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoAmI;
