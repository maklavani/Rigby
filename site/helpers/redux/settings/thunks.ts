// Types
import type { ReduxThunkAction } from '@/types/helpers/redux/store'

// Slices
import { settingsSlice } from '@/helpers/redux/settings'

// Selectors
import { selectMode } from '@/helpers/redux/settings/selectors'

export const setModeSetting =
	(mode: string): ReduxThunkAction =>
	(dispatch, getState) => {
		const currentMode = selectMode(getState())
		console.log(currentMode, mode)

		if (currentMode != mode) dispatch(settingsSlice.actions.setMode(mode))
	}
