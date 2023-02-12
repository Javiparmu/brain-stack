import {
  baseTheme,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#ffffff', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 10,
      fontSize: 20,
      _hover: {
        color: colors.primary,
      },
    }),
  },
  Text: {
    baseStyle: (props: any) => ({
      color: mode(
        colors.primaryFontColor.lightMode,
        colors.primaryFontColor.darkMode,
      )(props),
    }),
    variants: {
      secondary: (props: any) => ({
        color: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode,
        )(props),
      }),
    },
  },
  Input: {
    baseStyle: (props: any) => ({
      color: mode(
        colors.primaryFontColor.lightMode,
        colors.primaryFontColor.darkMode,
      )(props),
      borderColor: mode(
        colors.primaryFontColor.lightMode,
        colors.primaryFontColor.darkMode,
      )(props),
      '&:hover': {
        borderColor: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode,
        )(props),
      },
      '&:focus': {
        borderColor: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode,
        )(props),
      },
    }),
  },
}

const fonts = {
  heading: 'Space Grotesk, sans-serif',
}

const colors = {
  primaryFontColor: {
    lightMode: baseTheme.colors.gray['700'],
    darkMode: baseTheme.colors.gray['200'],
  },
  secondaryFontColor: {
    lightMode: baseTheme.colors.gray['600'],
    darkMode: baseTheme.colors.gray['400'],
  },
  primary: '#676BB9',
  plainOldBlue: 'blue',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme: any = extendTheme({
  styles,
  components,
  fonts,
  colors,
  config,
})

export default theme
