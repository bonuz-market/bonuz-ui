import { FC } from 'react';

export type HowItWorksItemProps = {
  img: string;
  title: string;
  circleOffset: number;
};

export const HowItWorksItem: FC<HowItWorksItemProps> = ({
  img,
  title,
  circleOffset,
}) => (
  <>
    <div
      className="block"
      data-aos="fade-left"
      data-aos-duration="1300"
      data-aos-delay="0"
      data-aos-offset="-200"
    >
      <div className="icon">
        <div id="cont" data-pct="20">
          <svg
            id="svg"
            width="200"
            height="200"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              id="back"
              r="90"
              cx="100"
              cy="100"
              fill="transparent"
              strokeDasharray="565.48"
              strokeDashoffset="0"
            />
            <circle
              className="bar"
              r="90"
              cx="100"
              cy="100"
              fill="transparent"
              strokeDasharray="565.48"
              strokeDashoffset="0"
              style={{ strokeDashoffset: circleOffset, opacity: 1 }}
            />
            <defs>
              <linearGradient id="MyGradient">
                <stop offset="5%" stopColor="#CC16FF" />
                <stop offset="95%" stopColor="#48F573" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </div>
  </>
);
