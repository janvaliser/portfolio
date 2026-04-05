import Typography from "@/components/Typography/Typography";
import classes from "./WhoAmI.module.scss";
import classNames from "classnames";
import Image from "next/image";

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
  return (
    <section className={classes.container}>
      <div className={classes.grid}>
        <div className={classNames(classes.about, classes.item)}>
          <Typography variant="title">Who am I?</Typography>
          <Typography variant="body-1">
            Frontend & mobile developer based in Slovenia, currently a computer
            science student focused on building modern, visually polished apps
            with smooth, thoughtful animations.
          </Typography>
        </div>
        <div className={classNames(classes.stack, classes.item)}>
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
        </div>
        <div className={classNames(classes.education, classes.item)}>
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
        </div>
        <div className={classNames(classes.image, classes.item)}></div>
        <div className={classNames(classes.center, classes.item)}>
          <Typography align="center" variant="title">
            Mobile & <br />
            Web Developer
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
