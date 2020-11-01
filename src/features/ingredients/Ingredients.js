import React from 'react';
import {useSelector} from 'react-redux';
import {selectIngredients} from './ingredientsSlice';
import {AddIngredient} from './AddIngredient';
import {Ingredient} from './Ingredient';
import {Collection, CollectionItem} from 'react-materialize';

export function Ingredients() {
  const ingredients = useSelector(selectIngredients);

  return (
    <Collection header="Ingrédients dans mon frigo">
      {[...new Set(ingredients)].map(ingredient => <CollectionItem key={ingredient}><Ingredient ingredient={ingredient}/></CollectionItem>)}
      <CollectionItem>
        <AddIngredient/>
      </CollectionItem>
    </Collection>
  );
}
