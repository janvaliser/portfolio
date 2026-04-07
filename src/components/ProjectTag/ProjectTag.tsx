import { memo } from "react";
import Typography from "../Typography/Typography";
import classes from "./ProjectTag.module.scss";

type ProjectTagVariant = "mobile-app" | "responsive-web-app" | "web-app";

const labelMap: Record<ProjectTagVariant, string> = {
  "mobile-app": "Mobile App",
  "responsive-web-app": "Responsive Web App",
  "web-app": "Web App",
};

type ProjectTagProps = {
  variant: ProjectTagVariant;
  color?: string;
};

const ProjectTag = ({ variant, color }: ProjectTagProps) => {
  return (
    <div
      className={classes.container}
      style={{
        ...(color ? { background: `var(${color})` } : {}),
      }}
    >
      <Typography
        className={variant === "responsive-web-app" ? classes.responsive : ""}
        variant="body-1-bold"
      >
        {labelMap[variant]}
      </Typography>
    </div>
  );
};

export default memo(ProjectTag);
