/**
 *      FRAMEWORK
 */
import React, { FC } from "react";
/**
 *      STYLES
 */
import   "./SectionContainer.scss";

export type SectionContainerProps = {
  className?: string;
};

export const SectionContainer: FC<SectionContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <section className={`container ${className}`}>
      <div className="_container">{children}</div>
    </section>
  );
};
