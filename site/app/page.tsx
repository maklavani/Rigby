import dynamic from 'next/dynamic'
import { Box } from '@mui/material'

// Configurations
import themeConfig from '@/configs/theme'

// Components
const MainOrganism = dynamic(() => import('@/components/organisms/main'))

const HomePage = () => {
	return (
		<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${themeConfig.drawerWidth}px)` } }}>
			<MainOrganism />
		</Box>
	)
}

export default HomePage
