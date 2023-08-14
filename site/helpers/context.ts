'use client'

import { createContext } from 'react'

// Types
import type { SetStateAction } from 'react'
import type { PaletteMode } from '@mui/material'
import type { Settings } from '@/types/helpers/context'

const SettingsConfig: Settings = {
	mode: 'light',
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setMode: (value: SetStateAction<PaletteMode | 'system'>) => {
		throw new Error('Function not implemented.')
	}
}

export const SettingsContext = createContext(SettingsConfig)
