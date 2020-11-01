import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchMatchingRecipes} from '../../api/fridge-api';

const initialState = {
  recipes: [],
  status: 'idle',
  error: null
}

export const getMatchingRecipes = createAsyncThunk('recipes/getMatchingRecipes', fetchMatchingRecipes);

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: {
    [getMatchingRecipes.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getMatchingRecipes.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.recipes = action.payload;
    },
    [getMatchingRecipes.rejected]: (state, action) => {
      state.status = 'failed';
      state.recipes = [];
      state.error = action.error.message;
    }
  }
});

export const {
  loadRecipes
} = recipesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead
// of in the slice file. For example: `useSelector((state) =>
// state.counter.value)`
export const selectRecipes = state => state.recipes.recipes;
export const selectRecipesStatus = state => state.recipes.status;
export const selectRecipesError = state => state.recipes.error;

export default recipesSlice.reducer;
