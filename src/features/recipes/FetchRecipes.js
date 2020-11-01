import React from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {selectIngredients} from '../ingredients/ingredientsSlice';
import {getMatchingRecipes, selectRecipesStatus, selectRecipesError} from './recipesSlice';
import styles from './Recipes.module.css';
import {Loading} from '../helpers/Loading';
import {Icon, Button} from 'react-materialize';

export function FetchRecipes() {
  const ingredients = useSelector(selectIngredients);
  const status = useSelector(selectRecipesStatus);
  const error = useSelector(selectRecipesError);
  const dispatch = useDispatch();

  const buttonFn = (text) => <div>
    <Button
      waves="light"
      large
      className="green"
      onClick={_ => dispatch(getMatchingRecipes({ingredients, limit: 10}))}>
      <Icon left>restaurant</Icon>
      {text}
      <Icon right>search</Icon>
    </Button>
  </div>
  let button = buttonFn("Que puis-je faire ?");

  if (status === 'loading') {
    button = <Loading/>
  } else if (status === 'failed') {
    button = <div>
      <div className={"red darken-4 white-text " + styles.error}>{error}</div>
      {buttonFn("Rééssayer ?")}
    </div>
  }

  return button;
}
