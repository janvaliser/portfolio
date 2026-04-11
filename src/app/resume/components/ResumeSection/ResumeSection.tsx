import { TimelineDotIcon } from "@/components/Timeline/TimelineDot/TimelineDot";
import TimelineEntry from "@/components/Timeline/TimelineEntry/TimelineEntry";
import Typography from "@/components/Typography/Typography";
import classNames from "classnames";
import { memo } from "react";
import { motion } from "motion/react";
import classes from "./ResumeSection.module.scss";

type ResumeSectionEntry = {
  icon: TimelineDotIcon;
  title: string;
  location: string;
  date: string;
};

type ResumeSectionProps = {
  title: string;
  entries: ResumeSectionEntry[];
  titleDelay?: number;
  entriesStartDelay?: number;
  entryDelayStep?: number;
};

const ResumeSection = (props: ResumeSectionProps) => {
  const {
    title,
    entries,
    titleDelay = 0,
    entriesStartDelay = 0,
    entryDelayStep = 0.12,
  } = props;

  return (
    <section className={classes.container}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            delay: titleDelay,
          },
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Typography variant="title">{title}</Typography>
      </motion.div>
      <div className={classes.entries}>
        {entries.map((entry, idx) => (
          <motion.div
            className={classes.entry}
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
                delay: entriesStartDelay + idx * entryDelayStep,
              },
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <TimelineEntry icon={entry.icon} />
            <div
              className={classNames(classes.entryText, {
                [classes.last]: idx == entries.length - 1,
              })}
            >
              <Typography className={classes.title} variant="body-1">
                {entry.title}
              </Typography>

              <Typography
                className={classes.date}
                color="--text-02"
                variant="body-2"
              >
                {entry.date}
              </Typography>

              <Typography color="--text-02" variant="body-2">
                {entry.location}
              </Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(ResumeSection);
