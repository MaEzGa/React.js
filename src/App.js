import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar/';
import ItemListContainer from './Components/Containers/ItemListContainer';
import ItemCount from './Components/Count/ItemCount'
import Catalogo from './Components/ItemList/ItemList'

const App = () => {

  const handleAdd = (counter) =>{}

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a Arrecife de Coral'}/>
      <ItemCount onAdd={handleAdd} stock={20} inicial={0} />
      <Catalogo />
    </> 
  );
}

export default App;
