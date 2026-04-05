import classNames from "classnames";
import TimelineDot, { TimelineDotIcon } from "../TimelineDot/TimelineDot";
import TimelineLine from "../TimelineLine/TimelineLine";
import classes from "./TimelineEntry.module.scss";

type TimelineEntryProps = {
  last: boolean;
  icon: TimelineDotIcon;
};

const TimelineEntry = ({ last, icon }: TimelineEntryProps) => {
  return (
    <div className={classNames(classes.container, { [classes.last]: last })}>
      <TimelineDot icon={icon} />
      <TimelineLine />
    </div>
  );
};

export default TimelineEntry;
