"use client";

import { ChakraProvider, extendTheme, type ChakraProviderProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

const theme = extendTheme({
  fonts: {
    heading: "var(--font-inter), system-ui, sans-serif",
    body: "var(--font-inter), system-ui, sans-serif",
  },
});

type ChakraProviderWrapperProps = ChakraProviderProps & {
  children: ReactNode;
};

export function ChakraProviderWrapper({
  children,
  ...props
}: ChakraProviderWrapperProps) {
  return <ChakraProvider theme={theme} {...props}>{children}</ChakraProvider>;
}

