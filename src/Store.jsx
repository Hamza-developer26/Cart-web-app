import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Redux/Cardslice'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default store;