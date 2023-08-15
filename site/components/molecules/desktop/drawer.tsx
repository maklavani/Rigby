'use client'

import dynamic from 'next/dynamic'
import { useTheme, Drawer, Toolbar } from '@mui/material'

// Configurations
import themeConfig from '@/configs/theme'

// Types
import type { DrawerProps } from '@/types/components/molecules/drawer'

// Components
const ProfileMolecule = dynamic(() => import('@/components/molecules/profile'))
const MenuMolecule = dynamic(() => import('@/components/molecules/menu'))

const DrawerMolecule = (props: DrawerProps) => {
	// Props
	const { open } = props

	// Theme
	const theme = useTheme()

	return (
		<Drawer
			variant="permanent"
			sx={{
				display: { xs: 'none', sm: 'block' },
				'& .MuiDrawer-paper': {
					width: !open ? 0 : themeConfig.drawerWidth,
					boxSizing: 'border-box',
					zIndex: theme.zIndex.appBar
				}
			}}
			open
		>
			<Toolbar />
			<ProfileMolecule elevation={0} borderRadius={0} />
			<MenuMolecule />
		</Drawer>
	)
}

export default DrawerMolecule
