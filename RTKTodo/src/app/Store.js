import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from '../features/Mytodos/todoSlice'

const Store = configureStore({
    reducer: todoSliceReducer
})

export default Store