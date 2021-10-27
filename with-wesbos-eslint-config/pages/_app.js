import { any } from 'prop-types';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: any,
  pageProps: any,
};
