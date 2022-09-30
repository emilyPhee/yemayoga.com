import { extendTheme } from '@chakra-ui/react';

export const theme = {
  colors: {
    brandColor1: '#E1DCD7',
    brandColor2: '#F7F4F2',
    brandColor3: '#FAFAFA',
    mainBackground: '#F3F2F0',
    navbarActive: '#333333',
    navbarInactive: '#B9B9B9',
    blackText: '#313030',
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
    paddingMediumScreen: '2.5rem',
    paddingSmallScreen: '',
    bodyFontsSize: '1.5rem',
    fontsTitleSize: '2.1rem',
    fontsDescriptionTitle: '2.2rem',
    fontsDescriptionTitleSub: '1.5rem',
    fontsSystemTitle: '2.2rem',
  },
  mediaQuery: {
    desktop: '@media screen and (min-width: 1024px)',
    smallScreen: '@media screen and (max-width: 768px)',
  },
};

export const chakraExtendedTheme = extendTheme({});
