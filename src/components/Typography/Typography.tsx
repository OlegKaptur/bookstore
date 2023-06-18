import React from "react";
import cn from "classnames";

import styles from "./Typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "primary" | "secondary";
  fontStyles?: "bebasNeue" | "roboto";
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  color = "primary",
  fontStyles = "bebasNeue",
  className,
  children,
}) => {
  const Tag = variant;

  return (
    <Tag
      className={cn(
        styles[variant],
        styles[color],
        styles[fontStyles],
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
