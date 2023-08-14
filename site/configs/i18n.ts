import type { I18n } from '@/types/configs/i18n'

const i18nConfig: I18n = {
	defaultLocale: 'en',
	defaultNS: ['common', 'form', 'links']
}

export default i18nConfig

export function getOptions(lng = i18nConfig.defaultLocale, ns: string | string[] = i18nConfig.defaultNS) {
	return {
		// debug: process.env.NODE_ENV === 'development',
		supportedLngs: [i18nConfig.defaultLocale],
		fallbackLng: lng ?? i18nConfig.defaultLocale,
		lng,
		fallbackNS: i18nConfig.defaultNS[0],
		defaultNS: i18nConfig.defaultNS,
		ns
	}
}
