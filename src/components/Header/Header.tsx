"use client";

import Link from "next/link";
import classes from "./Header.module.scss";
import Typography from "../Typography/Typography";

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Link href="/" className={classes.logoLink}>
          <Typography variant="title">Jan Vališer</Typography>
        </Link>

        <div className={classes.actions}>
          <Link href="/projects" className={classes.link}>
            Projects
          </Link>
          {/* <Link href="/privacy" className={classes.link}>
              Contact
            </Link> */}
          <Link href="/cv" className={classes.link}>
            CV
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
