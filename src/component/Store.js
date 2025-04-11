import { configureStore } from '@reduxjs/toolkit'
import iconSlice from './icon.js'


export default configureStore({
  reducer: {
    icon : iconSlice,
  },
})

