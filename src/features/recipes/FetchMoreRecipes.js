import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {selectIngredients} from '../ingredients/ingredientsSlice';
import {getMatchingRecipes, selectRecipesStatus, selectRecipesError} from './recipesSlice';
import styles from './Recipes.module.css';
import {Loading} from '../helpers/Loading';
import {Icon, Button} from 'react-materialize';

export function FetchMoreRecipes() {
  const ingredients = useSelector(selectIngredients);
  const status = useSelector(selectRecipesStatus);
  const error = useSelector(selectRecipesError);
  const [limit,
    setLimit] = useState(20);
  const dispatch = useDispatch();
  const onClick = () => {
    setLimit(limit + 10);
    dispatch(getMatchingRecipes({ingredients, limit}))
  }

  const buttonFn = (text) => <div>
    <Button
      waves="light"
      large
      className="green"
      onClick={onClick}>
      <Icon left>restaurant</Icon>
      {text}
      <Icon right>search</Icon>
    </Button>
  </div>
  let button = buttonFn("Chercher plus de recettes...");

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
