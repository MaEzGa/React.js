import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/Count/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

import  {BrowserRouter, Switch, Route} from 'react-router-dom';


const App = () => {

  const handleAdd = (counter) =>{}

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a Arrecife de Coral'}/>
      <ItemCount onAdd={handleAdd} stock={20} inicial={0} />  
      <ItemDetailContainer />
    </>
  );
}

export default App;