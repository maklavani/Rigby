'use client'

import { useContext } from 'react'
import dynamic from 'next/dynamic'
import { ButtonGroup } from '@mui/material'
import { LightMode as LightIcon, Brightness4 as SystemIcon, DarkMode as DarkIcon } from '@mui/icons-material'

// Types
import type { PaletteMode } from '@mui/material'
import type { ModeProps } from '@/types/components/molecules/mode'

// Context
import { SettingsContext } from '@/helpers/context'

// Helpers
import { useAppDispatch, useAppSelector } from '@/helpers/redux'
import { setModeSetting } from '@/helpers/redux/settings'

// Components
const ModeButtonAtom = dynamic(() => import('@/components/atoms/mode-button'))

const ModeMolecule = (props: ModeProps) => {
	// Props
	const { text, sx } = props

	// Context
	const { setMode } = useContext(SettingsContext)

	// Dispatch
	const dispatch = useAppDispatch()

	// State
	const { mode } = useAppSelector(state => state.settings)

	const changeMode = (mode: PaletteMode | 'system') => {
		dispatch(setModeSetting(mode))
		setMode(mode)
	}

	return (
		<ButtonGroup sx={sx}>
			<ModeButtonAtom mode={mode == 'light'} icon={<LightIcon />} label={text ? 'form:button.light' : undefined} ariaLabel="light mode" onClick={() => changeMode('light')} />

			<ModeButtonAtom
				mode={mode == 'system'}
				icon={<SystemIcon />}
				label={text ? 'form:button.system' : undefined}
				ariaLabel="system mode"
				onClick={() => changeMode('system')}
			/>

			<ModeButtonAtom mode={mode == 'dark'} icon={<DarkIcon />} label={text ? 'form:button.dark' : undefined} ariaLabel="dark mode" onClick={() => changeMode('dark')} />
		</ButtonGroup>
	)
}

export default ModeMolecule
