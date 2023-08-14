'use client'

import { useTheme, Drawer, Toolbar } from '@mui/material'

// Configurations
import themeConfig from '@/configs/theme'

// Types
import type { DrawerProps } from '@/types/components/molecules/drawer'

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
					width: !open ? theme.spacing(7) : themeConfig.drawerWidth,
					boxSizing: 'border-box',
					zIndex: theme.zIndex.appBar
				}
			}}
			open
		>
			<Toolbar />
		</Drawer>
	)
}

export default DrawerMolecule
