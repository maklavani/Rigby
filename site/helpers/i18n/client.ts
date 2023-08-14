'use client'

import { useEffect, useState } from 'react'
import i18next, { FlatNamespace, KeyPrefix } from 'i18next'
import { initReactI18next, useTranslation as useTranslationBase } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// Configurations
import i18nConfig, { getOptions } from '@/configs/i18n'
const runsOnServerSide = typeof window === 'undefined'

// Types
import type { FallbackNs } from 'react-i18next'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(resourcesToBackend((language: string, namespace: string) => import(`../../locales/${language}/${namespace}.json`)))
	.init({
		...getOptions(),
		// Let detect the language on client side
		lng: undefined,
		detection: {
			order: ['path', 'htmlTag', 'cookie', 'navigator']
		},
		preload: runsOnServerSide ? [i18nConfig.defaultLocale] : []
	})

export function useTranslation<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(lng?: string, ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
	const ret = useTranslationBase(ns, options)
	const { i18n } = ret

	if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) i18n.changeLanguage(lng)
	else {
		const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

		useEffect(() => {
			if (activeLng === i18n.resolvedLanguage) return
			setActiveLng(i18n.resolvedLanguage)
		}, [activeLng, i18n.resolvedLanguage])

		useEffect(() => {
			if (!lng || i18n.resolvedLanguage === lng) return
			i18n.changeLanguage(lng)
		}, [lng, i18n])
	}

	return ret
}
