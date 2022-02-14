import { FC } from 'react';
import './StatElement.scss';

export type StatElementProps = {
  title: string;
  description: string;
  colorHex: string;
};
const svgWithColor = (color: string) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 0L3.52435 2.04174L0 4L0.0487032 8L0 12L3.52435 13.9583L7 16L10.4756 13.9583L14 12L13.9513 8L14 4L10.4756 2.04174L7 0Z"
      fill={color}
    />
  </svg>
);
export const StatElement: FC<StatElementProps> = ({
  colorHex,
  title,
  description,
}) => (
  <div className="stat-element">
    {svgWithColor(colorHex)}
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);
