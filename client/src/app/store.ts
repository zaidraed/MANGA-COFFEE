import {Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import mangaReducer from '../features/manga/mangaSlice'
import productsReducer from '../features/products/productsSlice'
import userReducer from '../features/user/userSlice'
const store = configureStore({
  reducer: {
    mangas : mangaReducer,
    products : productsReducer ,
    user : userReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void > = ThunkAction < 
ReturnType,
RootState,
unknown,
Action<string>
>;