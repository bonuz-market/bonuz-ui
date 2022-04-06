/**
 *      FRAMEWORK
 */
import React, { FC } from "react";
/**
 *      STYLES
 */
import "./IconGradientContainer.scss";

export const IconGradientContainer: FC<{ href: string }> = ({ children, href = "/" }) => {

  return (
    <a
      href={href}
      className="container"
    >
      <svg
        width="57"
        height="64"
        viewBox="0 0 57 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.849 9.03308L14.8387 9.03902L14.8283 9.04472L1.00738 16.5894L1.19822 31.9876L1.19837 32L1.19822 32.0124L1.00738 47.4106L14.8283 54.9553L14.8387 54.961L14.849 54.9669L28.5 62.8454L42.151 54.9669L42.1613 54.961L42.1717 54.9553L55.9926 47.4106L55.8018 32.0124L55.8016 32L55.8018 31.9876L55.9926 16.5894L42.1717 9.04472L42.1613 9.03902L42.151 9.03308L28.5 1.15459L14.849 9.03308Z"
          stroke="url(#paint0_linear_3_3254)"
          strokeWidth="2"
        />

        <defs>
          <linearGradient
            id="paint0_linear_3_3254"
            x1="-2.14371"
            y1="31.544"
            x2="57.3966"
            y2="30.7153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CE09FF" />
            <stop offset="1" stopColor="#FFA34E" />
          </linearGradient>
        </defs>

        <svg
          className="containerOpacity"
          width="57"
          height="64"
          viewBox="0 0 57 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 0L14.3491 8.16698L-1.07486e-06 16L0.198292 32L-1.07486e-06 48L14.3491 55.833L28.5 64L42.6509 55.833L57 48L56.8017 32L57 16L42.6509 8.16698L28.5 0Z"
            fill="url(#paint0_linear_3_3258)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3_3258"
              x1="-2.14371"
              y1="31.544"
              x2="57.3966"
              y2="30.7153"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CE09FF" />
              <stop offset="1" stopColor="#FFA34E" />
            </linearGradient>
          </defs>
        </svg>
      </svg>
      <div className="containerChild">{children}</div>
    </a>
  );
};


