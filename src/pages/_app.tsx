import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

import { GameContextProvider } from "../contexts/GameContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <GameContextProvider>
        <Component {...pageProps} />;
      </GameContextProvider>
    </ChakraProvider>
  );
}
