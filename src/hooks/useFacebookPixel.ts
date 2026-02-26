// src/hooks/useFacebookPixel.ts
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

export const useFacebookPixel = (pixelId: string) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && pixelId) {
      ReactPixel.init(pixelId, undefined, { autoConfig: true, debug: false });
      ReactPixel.pageView();
    }
  }, [pixelId]);
};