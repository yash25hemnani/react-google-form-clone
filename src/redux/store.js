import { configureStore } from "@reduxjs/toolkit";
import formSlice from '../redux/formSlice'

export const store = configureStore({
    reducer: formSlice
})