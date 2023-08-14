import { dir } from 'i18next'
import { createTheme } from '@mui/material/styles'

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
		background: { default: '#121212' }
	},
	shape: { borderRadius: 15 },
	typography: { fontFamily: roboto.style.fontFamily },
	components: { MuiCssBaseline: { styleOverrides: { body: { scrollBehavior: 'smooth' } } } }
})

export default themeDarkConfig
