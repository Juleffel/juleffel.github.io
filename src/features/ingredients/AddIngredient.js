import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addIngredient} from './ingredientsSlice';
import styles from './AddIngredient.module.css';
import {Icon, Button} from 'react-materialize';

export function AddIngredient() {
  const dispatch = useDispatch();
  const [newIngredient,
    setNewIngredient] = useState("");
  const submitNewIngredient = (event) => {
    event.preventDefault();
    if (newIngredient === '') {
      return false;
    }
    dispatch(addIngredient(newIngredient));
    setNewIngredient("");
    return false;
  }

  return (
    <form onSubmit={submitNewIngredient}>
      <div className={"valign-wrapper center " + styles.form}>
        <input
          className={styles.input}
          id="add-ingredient-input"
          placeholder="Ajouter un ingrédient dans mon frigo"
          value={newIngredient}
          onChange={e => setNewIngredient(e.target.value)}/>
        <Button
          floating
          icon={<Icon>send</Icon>}
          large
          className="green"
          id="add-ingredient-button"
          waves="light"/>
      </div>
    </form>
  );
}
