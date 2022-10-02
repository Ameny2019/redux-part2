import { configureStore } from '@reduxjs/toolkit'
import todoslice from './todoslice'

// export const store = configureStore({ 
//badelneha louta

    export default configureStore({ 

  reducer: {
    todo:todoslice
  },
})

