import { store } from '@/store/store';
import '@/styles/globals.css';
import theme from '@/theme/theme';
import {
  CSSReset,
  ChakraProvider,
  ColorModeScript,
} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      />
      <CSSReset />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
