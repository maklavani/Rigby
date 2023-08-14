import dynamic from 'next/dynamic'
import { dir } from 'i18next'
import { Box } from '@mui/material'

// Configurations
import config from '@/configs'
import i18nConfig from '@/configs/i18n'
import themeConfig from '@/configs/theme'

// Types
import type { Metadata } from 'next'
import type { LayoutProps } from '@/types/layouts'

// Helpers
import { useTranslation } from '@/helpers/i18n'

// Components
import ThemeRegistry from '@/components/theme/registry'

const HeaderOrganism = dynamic(() => import('@/components/organisms/header'))

// Metadata
export const metadata = async () => {
	// Variables
	const { t } = await useTranslation()

	const metadata: Metadata = {
		viewport: {
			width: 'device-width',
			initialScale: 1,
			maximumScale: 5
		},
		applicationName: config.shortName,
		appleWebApp: {
			title: t('common:app.name'),
			statusBarStyle: 'black-translucent',
			startupImage: [
				'/images/icon192.png',
				{
					url: '/images/icon512.png',
					media: '(device-width: 768px) and (device-height: 1024px)'
				}
			]
		},
		referrer: 'origin-when-cross-origin',
		manifest: '/manifest.json',
		themeColor: themeConfig.color,
		title: {
			template: `%s | ${t('common:app.name')}`,
			default: t('common:app.name')
		},
		description: t('common:app.description')
	}

	return metadata
}

// Layout
export default async function RootLayout(props: LayoutProps) {
	const { children } = props

	return (
		<html lang={i18nConfig.defaultLocale} dir={dir(i18nConfig.defaultLocale)}>
			<ThemeRegistry>
				<body>
					<Box sx={{ display: 'flex' }}>
						<HeaderOrganism />
						{children}
					</Box>
				</body>
			</ThemeRegistry>
		</html>
	)
}
