"use client";

import Link from "next/link";
import classes from "./Header.module.scss";
import Typography from "../Typography/Typography";
import { motion } from "motion/react";
import { useState } from "react";

const EASE = [0.4, 0, 0.2, 1] as const;

const Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Link
          href="/"
          className={classes.logoLink}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Typography variant="title">
            <span className={classes.logoText}>
              J
              <motion.span
                className={classes.fullName}
                initial={"hidden"}
                animate={hovered ? "visible" : "hidden"}
                variants={{
                  visible: { width: "auto", opacity: 1 },
                  hidden: { width: 0, opacity: 0 },
                }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                an
              </motion.span>
              <motion.span
                animate={{ width: hovered ? 10 : 0 }}
                transition={{ duration: 0.35, ease: EASE }}
              ></motion.span>
              V
              <motion.span
                className={classes.fullName}
                initial={"hidden"}
                animate={hovered ? "visible" : "hidden"}
                variants={{
                  visible: { width: "auto", opacity: 1 },
                  hidden: { width: 0, opacity: 0 },
                }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                  delay: 0.05,
                }}
              >
                ališer
              </motion.span>
            </span>
          </Typography>
        </Link>

        <div className={classes.actions}>
          <Link href="/projects" className={classes.link}>
            Projects
          </Link>
          <Link href="/cv" className={classes.link}>
            CV
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
