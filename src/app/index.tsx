import { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
