import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../redux/CartReducer'
import ProduceReducer from '../redux/ProduceReducer'

export const store = configureStore({
  reducer: {
    cart:CartReducer,
    product:ProduceReducer
  },
})