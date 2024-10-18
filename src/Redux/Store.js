import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from '../Redux/recipeSlice'


const recipeStore = configureStore({
    reducer:{
        recipeReducer : recipeSlice
    }
})

export default recipeStore