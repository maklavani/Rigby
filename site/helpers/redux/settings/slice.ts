import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from 'cookies-next'

// Types
import type { SettingsSliceState } from '@/types/helpers/redux/settings'

// Configurations
import config from '@/configs'

// Utilities
import { getAlias } from '@/utils/convertors'

// State
const initialState: SettingsSliceState = { mode: 'system' }

// Get mode
const mode = getCookie(`${getAlias(config.shortName)}-mode`)

if (mode) initialState.mode = mode.toString()

// Slice
export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setMode: (state, action) => {
			state.mode = action.payload

			// Set cookie
			setCookie(`${getAlias(config.shortName)}-mode`, state.mode)
		}
	}
})
