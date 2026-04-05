import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { Download } from "lucide-react";
import { memo } from "react";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import classes from "./page.module.scss";

const CV = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant="heading-1">Resume</Typography>
        <a href="/files/jan_valiser_cv.pdf" download>
          <Button leadingIcon={<Download size={18} strokeWidth={2.5} />}>
            Download
          </Button>
        </a>
      </div>
      <div className={classes.content}>
        <ResumeSection
          title="Experience"
          entries={[
            {
              icon: "box",
              title: "Mobile developer",
              location: "FERI - Programming Methodologies Laboratory",
              date: "JUN 2024 - FEB 2026",
            },
            {
              icon: "box",
              title: "Demonstrator",
              location: "FERI - Programming Methodologies Laboratory",
              date: "MAR 2025 - MAY 2025",
            },
          ]}
        />
        <ResumeSection
          title="Education"
          entries={[
            {
              icon: "graduation-cap",
              title: "Masters of Computer Science",
              location:
                "Faculty of Electrical Engineering and Computer Science University of Maribor",
              date: "2025 - PRESENT",
            },
            {
              icon: "graduation-cap",
              title: "Bachelors of Computer Science",
              location:
                "Faculty of Electrical Engineering and Computer Science University of Maribor",
              date: "2022 - 2025",
            },
            /* {
              icon: "graduation-cap",
              title: "General Gymnasium",
              location: "Prva Gimnazija Maribor",
              date: "2018 - 2022",
            }, */
          ]}
        />
      </div>
    </div>
  );
};

export default memo(CV);
