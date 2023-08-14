// Types
import type { ThunkAction, Action } from '@reduxjs/toolkit'

// Helpers
import { reduxStore } from '@/helpers/redux/store'

export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, Action>
