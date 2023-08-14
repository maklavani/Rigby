import { useSelector as useReduxSelector, useDispatch as useReduxDispatch } from 'react-redux'

// Types
import type { TypedUseSelectorHook } from 'react-redux'
import type { ReduxDispatch, ReduxState } from '@/types/helpers/redux/store'

export const useAppDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector
