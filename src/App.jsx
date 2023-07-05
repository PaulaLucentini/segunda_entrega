import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";




function App() {

  return (
    
      <div>
        <NavBar logo="Pupi"/>
        <ItemListContainer greeting="Hola Mundo"/>
    </div> 
  );
}

export default App;
