import React from 'react';
import {useDispatch} from 'react-redux';
import {removeIngredient} from './ingredientsSlice';
import {Icon} from 'react-materialize';

export function Ingredient(props) {
  const ingredient = props.ingredient;
  const dispatch = useDispatch();

  return (
    <div>
      {ingredient}
      <a
        href="#!"
        className="secondary-content red-text text-darken-3"
        onClick={_ => dispatch(removeIngredient(ingredient))}>
        <Icon>delete</Icon>
      </a>
    </div>
  );
}