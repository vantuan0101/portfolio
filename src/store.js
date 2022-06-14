import { configureStore } from '@reduxjs/toolkit'
import langHeaderReducer from './components/Header/headerSlice'
export const store = configureStore({
  reducer: {
    langHeader  : langHeaderReducer,
  },
})