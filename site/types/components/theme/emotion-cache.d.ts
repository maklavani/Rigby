// Types
import type { ReactNode, JSX } from 'react'
import type { EmotionCache, Options as OptionsOfCreateCache } from '@emotion/cache'

export type EmotionCacheProvider = {
	// This is the options passed to createCache() from 'import createCache from "@emotion/cache"'
	options: Omit<OptionsOfCreateCache, 'insertionPoint'>
	// By default <CacheProvider /> from 'import { CacheProvider } from "@emotion/react"'
	CacheProvider?: (props: { value: EmotionCache; children: ReactNode }) => JSX.Element | null
	children: ReactNode
}
