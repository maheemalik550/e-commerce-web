import { configureStore } from '@reduxjs/toolkit'
import user_dataSlice from './slice/user_data.slice'

export const store = configureStore({
  reducer: {
   user_data : user_dataSlice
  },
})