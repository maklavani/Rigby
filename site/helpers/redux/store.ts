import { configureStore } from '@reduxjs/toolkit'

// Reducer
import { reducer } from '@/helpers/redux/reducer'

// Middlewares
import { middleware } from '@/helpers/redux/middleware'

export const reduxStore = configureStore({
	reducer,
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(middleware)
	}
})
