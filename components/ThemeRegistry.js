'use client';

import * as React from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme'; // Adjust path as needed

function createEmotionCache() {
  return createCache({ key: 'mui', prepend: true });
}

export default function ThemeRegistry({ children }) {
  const [cache] = React.useState(() => createEmotionCache());

  useServerInsertedHTML(() => {
    const inserted = Object.entries(cache.inserted);
    cache.inserted = {}; // Reset inserted styles after server render
    return (
      <>
        {inserted.map(([key, style]) => (
          <style
            key={key}
            data-emotion={`${cache.key} ${key}`}
            dangerouslySetInnerHTML={{ __html: style }}
          />
        ))}
      </>
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
