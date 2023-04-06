import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer,
  // dobbiamo prima di poter completare la creazione dello store
  // creare la funzione reducer
})

export default store
