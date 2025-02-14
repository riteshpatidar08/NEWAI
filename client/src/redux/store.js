import { configureStore } from "@reduxjs/toolkit"; 
import countReducer from './slice/counterSlice.js'

const store = configureStore({
    reducer : {
     count : countReducer
    }
})

export default store