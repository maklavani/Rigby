// Types
import type { Dispatch, SetStateAction } from 'react'
import type { PaletteMode } from '@mui/material'

export type Settings = {
	mode: PaletteMode | 'system'
	setMode: Dispatch<SetStateAction<PaletteMode | 'system'>>
}
