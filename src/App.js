import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/';
import ItemListContainer from './Components/Containers/ItemListContainer';
import ItemCount from './Components/Count/ItemCount';

import  {BrowserRouter, Switch, Route} from 'react-router-dom';


const App = () => {

  const handleAdd = (counter) =>{}

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting={'Bienvenidos a Arrecife de Coral'}/>
            <ItemCount onAdd={handleAdd} stock={20} inicial={0} />
          </Route>
        </Switch>
    </BrowserRouter> 
  );
}

export default App;