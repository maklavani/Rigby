'use client'

import dynamic from 'next/dynamic'
import { SwipeableDrawer } from '@mui/material'

// Configurations
import themeConfig from '@/configs/theme'

// Types
import type { DrawerProps } from '@/types/components/molecules/drawer'

// Components
const MenuMolecule = dynamic(() => import('@/components/molecules/menu'))

const DrawerMolecule = (props: DrawerProps) => {
	// Props
	const { open, setOpen } = props

	return (
		<SwipeableDrawer
			variant="temporary"
			open={!open}
			onClose={() => setOpen(true)}
			onOpen={() => setOpen(false)}
			sx={{
				display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': {
					width: themeConfig.drawerWidth,
					boxSizing: 'border-box'
				}
			}}
		>
			<MenuMolecule />
		</SwipeableDrawer>
	)
}

export default DrawerMolecule
