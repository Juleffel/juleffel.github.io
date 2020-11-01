import { createSlice } from '@reduxjs/toolkit';

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: [],
    recipes: [],
  },
  reducers: {
    addIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter(ing => ing !== action.payload);
    },
  },
});

export const { addIngredient, removeIngredient } = ingredientsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectIngredients = state => state.ingredients.ingredients;

export default ingredientsSlice.reducer;
