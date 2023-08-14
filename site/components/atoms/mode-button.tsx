'use client'

import { Button, IconButton } from '@mui/material'

// Types
import type { ModeButton } from '@/types/components/atoms/mode-button'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

const ModeButtonAtom = (props: ModeButton) => {
	// Props
	const { mode, icon, label, ariaLabel, onClick } = props

	// Variables
	const { t } = useTranslation()

	if (label)
		return (
			<Button variant={mode ? 'contained' : 'outlined'} size="small" startIcon={icon} aria-label={ariaLabel} onClick={onClick}>
				{t(label)}
			</Button>
		)
	else
		return (
			<IconButton color={mode ? 'primary' : 'default'} size="small" aria-label={ariaLabel} onClick={onClick}>
				{icon}
			</IconButton>
		)
}

export default ModeButtonAtom
