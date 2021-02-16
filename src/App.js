import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/';
import ItemList from './Components/ItemList/ItemList';
import Home from './Components/HomeContainer/HomeContainer'
import Contactos from './Components/ContactoContainer/ContactoContainer'
import Footer from './Components/Footer/Footer'
import  {BrowserRouter, Switch, Route} from 'react-router-dom';


const App = () => {

  const handleAdd = (counter) =>{}

  return (
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Productos/:CategoryId">
              <ItemList />
            </Route>
            <Route exact path="/Contacto">
              <Contactos />
            </Route>   
        </Switch>
        <Footer />
      </BrowserRouter>
  );
}

export default App;