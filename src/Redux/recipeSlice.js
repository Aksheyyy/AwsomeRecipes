import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllRecipes = createAsyncThunk("recipieSlice/fetchAllRecipes", async () => {
    // console.log("Fetching recipes from API...");
    const result = await axios.get("https://dummyjson.com/recipes");
    // console.log(result.data);
    return result.data.recipes;
});

const recipeSlice = createSlice({
    name : "recipieSlice",
    initialState:{
        allRecipies : [],
        dummyAllrecipe : [],
        loading: false,
        error:''
    },
    reducers:{
        
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAllRecipes.fulfilled,(state,action)=>{
            state.allRecipies = action.payload
            state.dummyAllrecipe = action.payload
            state.loading = false
            state.error = ''
        })
        builder.addCase(fetchAllRecipes.pending,(state)=>{
            state.allRecipies = []
            state.dummyAllrecipe = []
            state.loading = true
            state.error = ''
        })
        builder.addCase(fetchAllRecipes.rejected,(state)=>{
            state.allRecipies = []
            state.dummyAllrecipe = []
            state.loading = false
            state.error = "Error While doing API Call!"
        })
    }
})


export const {recipeSearch} = recipeSlice.actions
export default recipeSlice.reducer