import { TimelineDotIcon } from "@/components/Timeline/TimelineDot/TimelineDot";
import TimelineEntry from "@/components/Timeline/TimelineEntry/TimelineEntry";
import Typography from "@/components/Typography/Typography";
import classNames from "classnames";
import { memo } from "react";
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
};

const ResumeSection = (props: ResumeSectionProps) => {
  const { title, entries } = props;
  return (
    <section className={classes.container}>
      <Typography variant="title">{title}</Typography>
      <div className={classes.entries}>
        {entries.map((entry, idx) => (
          <div className={classes.entry} key={idx}>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(ResumeSection);
