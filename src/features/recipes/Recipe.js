import React from 'react';
import styles from './Recipes.module.css';
import {Card, CardTitle, Icon} from 'react-materialize';

export function Recipe(props) {
  const result = props.result;
  const recipe = result.recipe;
  const checkIcon = (ingredient) => {
    if (result.found_recipe_ingredients.includes(ingredient)) {
      return <span>&nbsp;<Icon className={"green-text " + styles.check_icon}>check</Icon>
      </span>
    } else {
      return "";
    }
  }
  const content = <div>
    <ul>{recipe
        .ingredients
        .map((ingredient) => <li key={ingredient}>
          {ingredient}
          {checkIcon(ingredient)}
        </li>)}</ul>
    <p>{recipe
        .tags
        .map(tag => <span className={styles.badge} key={tag}>{tag}</span>)}</p>
  </div>

  let image = null;
  if (recipe.image) {
    image = <CardTitle image={recipe.image} alt={recipe.name}></CardTitle>
  }

  return (
    <Card title={recipe.name} header={image}>
      {content}
    </Card>
  );

}
