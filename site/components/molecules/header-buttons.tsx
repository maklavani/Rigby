'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { dir } from 'i18next'
import { Grid, Button, Menu, MenuList } from '@mui/material'
import { Twitter as TwitterIcon, Brightness4 as SystemIcon } from '@mui/icons-material'

// Configurations
import i18nConfig from '@/configs/i18n'

// Types
import type { MouseEvent } from 'react'

// Helpers
import { useTranslation } from '@/helpers/i18n/client'

// Components
const ModeMolecule = dynamic(() => import('@/components/molecules/mode'))

const HeaderButtonsMolecule = () => {
	// Variables
	const { t } = useTranslation()
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const open = Boolean(anchorEl)

	return (
		<Grid>
			<Button
				id="header-btn-more"
				variant="outlined"
				aria-label="header button more"
				aria-controls={open ? 'header-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={(event: MouseEvent<HTMLElement>) => {
					setAnchorEl(event.currentTarget)
				}}
				sx={{
					minWidth: '1em',
					mr: 1,
					p: '5px'
				}}
				disableElevation
			>
				<SystemIcon />
			</Button>

			<Menu
				id="header-menu"
				MenuListProps={{
					'aria-labelledby': 'btn-more'
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={() => {
					setAnchorEl(null)
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: dir(i18nConfig.defaultLocale) == 'ltr' ? 'right' : 'left'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: dir(i18nConfig.defaultLocale) == 'ltr' ? 'right' : 'left'
				}}
				PaperProps={{ style: { width: '29ch' } }}
			>
				<MenuList>
					<ModeMolecule text={true} sx={{ mx: 2 }} />
				</MenuList>
			</Menu>

			<Button
				href="https://twitter.com/rigbypc"
				target="_blank"
				variant="contained"
				color="blue"
				startIcon={<TwitterIcon />}
				disableElevation
				sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
			>
				{t('form:button.twitter')}
			</Button>

			<Button
				href="https://twitter.com/rigbypc"
				target="_blank"
				variant="contained"
				color="blue"
				disableElevation
				sx={{
					display: { xs: 'inline-flex', sm: 'none' },
					minWidth: '1em',
					p: '5px'
				}}
			>
				<TwitterIcon />
			</Button>
		</Grid>
	)
}

export default HeaderButtonsMolecule
