import React from 'react';
import {Ingredients} from './features/ingredients/Ingredients';
import {Recipes} from './features/recipes/Recipes';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Ingredients/>
        <Recipes/>
      </div>
    </div>
  );
}

export default App;
