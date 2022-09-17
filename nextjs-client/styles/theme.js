import { extendTheme } from '@chakra-ui/react';

export const theme = {
  colors: {
    brandColor1: '#E1DCD7',
    brandColor2: '#F7F4F2',
    brandColor3: '#FAFAFA',
    bodyBg: '#F5F5F5',
    navbarActive: '#333333',
    navbarInactive: '#B9B9B9',
    blackText: '#171717',
    mediumBlackText: '#404040',
    greyText: '#575757',
    lightGreyText: '#7A7A7A',
    whiteText: '#FFFFFF',
  },
  fonts: {
    cantarell: 'Cantarell, sans-serif',
    nanumGothic: 'Nanum Gothic, sans-serif',
    nunito: 'Nunito, sans-serif',
  },
  sizes: {
    paddingFullScreen: '9.5rem',
    paddingMediumScreen: '',
    paddingSmallScreen: '',
    fontsTitleSize: '1.9rem',
    fontsDescriptionTitle: '2.7rem',
    fontsDescriptionTitleSub: '1.7rem',
    fontsSystemTitle: '2.2rem',
  },
  mediaQuery: {
    desktop: '@media screen and (min-width: 1024px)',
    tablet: '@media screen and (min-width: 768px) and (max-width: 1023px)',
    smartphone: '@media screen and (max-width: 767px)',
  },
};

export const chakraExtendedTheme = extendTheme({});
