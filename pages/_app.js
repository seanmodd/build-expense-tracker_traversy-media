import CounterContextProvider from '../context/CounterContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CounterContextProvider>
      <Component {...pageProps} />
    </CounterContextProvider>
  );
}

export default MyApp;
