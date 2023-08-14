import { dir } from 'i18next'
import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

// Configurations
import i18nConfig from '@/configs/i18n'
import roboto from '@/configs/fonts/roboto'

const themeDarkConfig = createTheme({
	direction: dir(i18nConfig.defaultLocale),
	palette: {
		mode: 'dark',
		primary: { light: '#d7c2a1', main: '#b96', dark: '#937241', contrastText: '#fff' },
		secondary: { light: '#da223e', main: '#98182b', dark: '#560e18', contrastText: '#fff' },
		text: { primary: '#fdfefd', secondary: '#eee' },
		background: { default: '#121212' },
		blue: createTheme().palette.augmentColor({ color: { light: blue[300], main: blue[500], dark: blue[700], contrastText: '#fff' } })
	},
	shape: { borderRadius: 5 },
	typography: { fontFamily: roboto.style.fontFamily },
	components: { MuiCssBaseline: { styleOverrides: { body: { scrollBehavior: 'smooth' } } } }
})

export default themeDarkConfig
