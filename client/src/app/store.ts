import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import actionSlice from "../features/actions/eventSlice"

export const store = configureStore({
  reducer: {
    userAction: actionSlice
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
