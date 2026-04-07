import TimelineDot, { TimelineDotIcon } from "../TimelineDot/TimelineDot";
import TimelineLine from "../TimelineLine/TimelineLine";
import classes from "./TimelineEntry.module.scss";

type TimelineEntryProps = {
  icon: TimelineDotIcon;
};

const TimelineEntry = ({ icon }: TimelineEntryProps) => {
  return (
    <div className={classes.container}>
      <TimelineDot icon={icon} />
      <TimelineLine />
    </div>
  );
};

export default TimelineEntry;
