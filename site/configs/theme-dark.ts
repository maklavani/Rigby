import { dir } from 'i18next'
import { createTheme } from '@mui/material/styles'

// Configurations
import i18nConfig from '@/configs/i18n'
import roboto from '@/configs/fonts/roboto'

const themeDarkConfig = createTheme({
	direction: dir(i18nConfig.defaultLocale),
	palette: {
		mode: 'dark',
		primary: { light: '#eec497', main: '#e39d52', dark: '#b57226', contrastText: '#fff' },
		secondary: { light: '#75abf3', main: '#2f80ed', dark: '#115bbf', contrastText: '#fff' },
		error: { main: '#eb6d78', contrastText: '#fff' },
		warning: { main: '#e5bd5d' },
		info: { main: '#f2adfd' },
		success: { main: '#1abfaf', contrastText: '#fff' },
		text: { primary: '#fdfefd', secondary: '#eee' },
		background: { default: '#121212' }
	},
	shape: { borderRadius: 15 },
	typography: { fontFamily: roboto.style.fontFamily },
	components: { MuiCssBaseline: { styleOverrides: { body: { scrollBehavior: 'smooth' } } } }
})

export default themeDarkConfig
