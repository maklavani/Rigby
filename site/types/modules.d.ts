/* eslint-disable @typescript-eslint/consistent-type-definitions */
import '@mui/material/styles'

declare module '@mui/material/styles' {
	interface Palette {
		blue: Palette['primary']
	}
	interface PaletteOptions {
		blue: PaletteOptions['primary']
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		blue: true
	}
}
