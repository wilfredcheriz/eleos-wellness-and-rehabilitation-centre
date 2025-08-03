"use client";

import * as React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "../theme/theme";

const insertionPoint =
  typeof document !== "undefined"
    ? document.querySelector('meta[name="emotion-insertion-point"]')
    : null;

const muiCache = createCache({
  key: "mui",
  prepend: true,
  insertionPoint,
});

export default function ThemeRegistry({ children }) {
  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
