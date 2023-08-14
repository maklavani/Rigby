'use client'

import Image from 'next/image'
import { useTheme } from '@mui/material'

// Types
import type { LogoProps } from '@/types/components/atoms/logo'

const LogoAtom = (props: LogoProps) => {
	// Props
	const { mode } = props

	// Theme
	const theme = useTheme()

	if (mode == 'dark') return <Image src="/images/logo-dark.svg" width={4636} height={1024} alt="logo" />
	else if (mode == 'light') return <Image src="/images/logo-light.svg" width={4636} height={1024} alt="logo" />
	else return <Image src={`/images/logo-${theme.palette.mode}.svg`} width={4636} height={1024} alt="logo" />
}

export default LogoAtom
