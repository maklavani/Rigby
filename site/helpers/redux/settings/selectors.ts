// Types
import type { ReduxState } from '@/types/helpers/redux/store'

export const selectMode = (state: ReduxState) => state.settings.mode
