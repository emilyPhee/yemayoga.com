import { extendTheme } from '@chakra-ui/react';

export const theme = {
  colors: {
    brandColor1: '#E1DCD7',
    brandColor2: '#F7F4F2',
    brandColor3: '#FAFAFA',
    bodyBg: '#F5F5F5',
    navbarActive: '#333333',
    navbarInactive: '#B9B9B9',
    darkText: '#171717',
    mediumDarkText: '#404040',
    lightDarkText: '#575757',
    whiteText: '#FFFFFF',
  },
  fonts: {
    cantarell: 'Cantarell, sans-serif',
    sansSerif: 'Nanum Gothic, sans-serif',
    nunito: 'Nunito, sans-serif',
  },
  sizes: {
    marginFullScreen: '9.5rem',
    marginMediumScreen: '',
    marginSmallScreen: '',
  },
};

export const chakraExtendedTheme = extendTheme({});
