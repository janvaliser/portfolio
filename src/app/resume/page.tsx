"use client";

import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";
import { Download } from "lucide-react";
import { memo } from "react";
import ResumeSection from "./components/ResumeSection/ResumeSection";
import classes from "./page.module.scss";
import { motion } from "motion/react";

const CV = () => {
  const experienceEntries = [
    {
      icon: "box" as const,
      title: "Mobile developer",
      location: "FERI - Programming Methodologies Laboratory",
      date: "JUL 2024 - FEB 2026",
    },
    {
      icon: "box" as const,
      title: "Demonstrator",
      location: "FERI - Programming Methodologies Laboratory",
      date: "MAR 2025 - MAY 2025",
    },
  ];

  const educationEntries = [
    {
      icon: "graduation-cap" as const,
      title: "Masters of Computer Science",
      location:
        "Faculty of Electrical Engineering and Computer Science University of Maribor",
      date: "2025 - PRESENT",
    },
    {
      icon: "graduation-cap" as const,
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
  ];

  const sectionGapDelay = 0.14;
  const entryStepDelay = 0.12;

  const experienceTitleDelay = 0.18;
  const experienceEntriesStartDelay = experienceTitleDelay + sectionGapDelay;
  const educationTitleDelay =
    experienceEntriesStartDelay +
    experienceEntries.length * entryStepDelay +
    sectionGapDelay;
  const educationEntriesStartDelay = educationTitleDelay + sectionGapDelay;

  return (
    <div className={classes.container}>
      <motion.div
        className={classes.title}
        initial={{ opacity: 0, y: 15 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        }}
      >
        <Typography variant="heading-1">Resume</Typography>
        <a href="/files/jan_valiser_cv.pdf" download>
          <Button leadingIcon={<Download size={18} strokeWidth={2.5} />}>
            Download
          </Button>
        </a>
      </motion.div>
      <div className={classes.content}>
        <ResumeSection
          title="Experience"
          entries={experienceEntries}
          titleDelay={experienceTitleDelay}
          entriesStartDelay={experienceEntriesStartDelay}
          entryDelayStep={entryStepDelay}
        />
        <ResumeSection
          title="Education"
          entries={educationEntries}
          titleDelay={educationTitleDelay}
          entriesStartDelay={educationEntriesStartDelay}
          entryDelayStep={entryStepDelay}
        />
      </div>
    </div>
  );
};

export default memo(CV);
