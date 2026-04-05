/* import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */
import classNames from "classnames";
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import classes from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
  leadingIcon?: ReactNode;
};

const Button = (props: ButtonProps) => {
  const { className, fullWidth = false, leadingIcon, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={classNames(classes.container, className, {
        [classes.fullWidth]: fullWidth,
      })}
    >
      <LeadingIcon leadingIcon={leadingIcon} />
      {restProps.children}
    </button>
  );
};

const LeadingIcon = ({
  leadingIcon,
}: {
  leadingIcon?: /* IconDefinition  |*/ ReactNode;
}) => {
  if (!leadingIcon) return null;

  /* if (typeof leadingIcon === "object" && "iconName" in leadingIcon) {
    return <FontAwesomeIcon icon={leadingIcon} />;
  } */

  return leadingIcon;
};

export default memo(Button);
