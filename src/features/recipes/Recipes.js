import React from 'react';
import {useSelector} from 'react-redux';
import {selectRecipes} from './recipesSlice';
import styles from './Recipes.module.css';
import {Recipe} from './Recipe';
import {FetchRecipes} from './FetchRecipes';
import {FetchMoreRecipes} from './FetchMoreRecipes';
import {Grid} from '../helpers/Grid';

export function Recipes(props) {
  const recipes = useSelector(selectRecipes);

  const moreRecipes = recipes.length === 0 ? "" : <FetchMoreRecipes />;

  return (
    <div className={styles.container}>
      <FetchRecipes />
      <Grid>
        {recipes.map(result => (<Recipe key={result.recipe.name} result={result}/>))}
      </Grid>
      {moreRecipes}
    </div>
  );
}
