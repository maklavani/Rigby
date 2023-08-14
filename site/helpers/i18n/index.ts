import { createInstance, FlatNamespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

// Configurations
import i18nConfig, { getOptions } from '@/configs/i18n'

// Types
import type { FallbackNs } from 'react-i18next'

const initI18next = async (lng?: string, ns?: string | string[]) => {
	// On server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
	const i18nInstance = createInstance()

	await i18nInstance
		.use(initReactI18next)
		.use(resourcesToBackend((language: string, namespace: string) => import(`../../locales/${language}/${namespace}.json`)))
		.init(getOptions(lng, ns))

	return i18nInstance
}

export async function useTranslation<Ns extends FlatNamespace, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
	lng?: string,
	ns?: Ns,
	options: { keyPrefix?: KPrefix } = {}
) {
	const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? (ns as string[]) : (ns as string))

	return {
		t: i18nextInstance.getFixedT(i18nConfig.defaultLocale ?? lng, ns, options.keyPrefix),
		i18n: i18nextInstance
	}
}
