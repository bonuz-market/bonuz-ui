declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.PropsWithChildren<React.SVGProps<SVGSVGElement>>>;
  const src: string;
  export default src;
}
