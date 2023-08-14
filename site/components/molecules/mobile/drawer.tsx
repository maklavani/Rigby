'use client'

import { SwipeableDrawer } from '@mui/material'

// Configurations
import themeConfig from '@/configs/theme'

// Types
import type { DrawerProps } from '@/types/components/molecules/drawer'

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
		></SwipeableDrawer>
	)
}

export default DrawerMolecule
