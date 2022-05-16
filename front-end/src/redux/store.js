import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { tokenInfoSliceReducer } from "./slice/tokenSlice"

const rootReducer = combineReducers({
  tokenInfo: tokenInfoSliceReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
