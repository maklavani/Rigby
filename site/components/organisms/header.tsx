'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useTheme, AppBar, Container, IconButton, Toolbar, Grid, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

// Configurations
import themeConfig from '@/configs/theme'

// Components
const HeaderButtonsMolecule = dynamic(() => import('@/components/molecules/header-buttons'))
const DrawerMobileMolecule = dynamic(() => import('@/components/molecules/mobile/drawer'))
const DrawerDesktopMolecule = dynamic(() => import('@/components/molecules/desktop/drawer'))
const LogoAtom = dynamic(() => import('@/components/atoms/logo'))

// Styles
import styles from '@/styles/scss/organisms/header.module.scss'

const HeaderOrganism = () => {
	// ‌Variables
	const [open, setOpen] = useState(true)

	// Theme
	const theme = useTheme()

	return (
		<>
			<AppBar
				position="fixed"
				color="inherit"
				elevation={0}
				variant="outlined"
				sx={{
					zIndex: theme.zIndex.drawer
				}}
			>
				<Toolbar disableGutters>
					<Container maxWidth="xl">
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item alignItems="center" sx={{ display: 'flex', mr: 2 }}>
								<IconButton
									color="inherit"
									edge="start"
									aria-label="open drawer"
									onClick={() => {
										setOpen(!open)
									}}
									sx={{ mr: 2 }}
								>
									<MenuIcon />
								</IconButton>

								<Grid className={styles['header-logo']} sx={{ display: 'inline-flex', height: '2em' }}>
									<Link href="/">
										<LogoAtom />
									</Link>
								</Grid>
							</Grid>

							<Grid item>
								<HeaderButtonsMolecule />
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>

			<Box component="nav" sx={{ width: { sm: !open ? theme.spacing(7) : themeConfig.drawerWidth }, flexShrink: { sm: 0 } }}>
				<DrawerMobileMolecule open={open} setOpen={setOpen} />
				<DrawerDesktopMolecule open={open} setOpen={setOpen} />
			</Box>
		</>
	)
}

export default HeaderOrganism
