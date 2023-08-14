export const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
export const arabicNumbers = ['۰', '۱', '۲', '۳', '٤', '٥', '٦', '۷', '۸', '۹']

export function normalizeNumber(number: string) {
	for (let i = 0; i <= 9; i++) number = number.replace(new RegExp(`${persianNumbers[i]}`, 'g'), i.toString()).replace(new RegExp(`${arabicNumbers[i]}`, 'g'), i.toString())

	return number
}

export function toPersianNumber(number: string) {
	for (let i = 0; i <= 9; i++) number = number.replace(new RegExp(`${i}`, 'g'), persianNumbers[i])

	return number
}

export function getAlias(str: string) {
	return str.toLowerCase().replace(/\s+/g, '-').replace(/_+/g, '-')
}
