import { createAsyncThunk } from '@reduxjs/toolkit'

// Types
import type { ReduxState, ReduxDispatch } from '@/types/helpers/redux/store'

// A utility function to create a typed Async Thunk Actions
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: ReduxState
	dispatch: ReduxDispatch
	rejectValue: string
}>()
