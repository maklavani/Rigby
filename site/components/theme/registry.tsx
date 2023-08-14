'use client'

import { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Configurations
import themeLightConfig from '@/configs/theme-light'
import themeDarkConfig from '@/configs/theme-dark'

// Types
import type { ReactNode } from 'react'
import type { PaletteMode } from '@mui/material'

// Helpers
import { SettingsContext } from '@/helpers/context'
import { reduxStore } from '@/helpers/redux/store'

// Components
import EmotionCacheProvider from '@/components/theme/emotion-cache'

// Get theme
const getTheme = (mode: PaletteMode) => {
	// Create my theme
	const myTheme = createTheme(mode == 'light' ? themeLightConfig : themeDarkConfig)

	return myTheme
}

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	// Variables
	const [mode, setMode] = useState<PaletteMode | 'system'>('light')

	// Settings
	const settings = reduxStore.getState().settings

	// Find user mode
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

	// Set mode
	useEffect(() => {
		if ((settings.mode == 'system' && prefersDarkMode) || settings.mode == 'dark') {
			if (mode != 'dark') setMode('dark')
		} else if (settings.mode == 'light') {
			if (mode != 'light') setMode('light')
		}
	}, [mode, prefersDarkMode, settings])

	return (
		<EmotionCacheProvider options={{ key: 'mui' }}>
			<SettingsContext.Provider value={{ mode, setMode }}>
				<Provider store={reduxStore}>
					<ThemeProvider theme={getTheme(mode == 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode)}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</Provider>
			</SettingsContext.Provider>
		</EmotionCacheProvider>
	)
}
