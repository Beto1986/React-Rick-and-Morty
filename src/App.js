import Cards from "./components/cards/Cards";
import { getAllCharacters } from "./services/Characters";
import { useState, useEffect } from "react";
import styles from "./app.module.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllCharacters(setData);
  }, []);

  // console.log(data);

  return (
    <>
      <h1 className={styles.title}>Rick and Morty</h1>
      <form>
        <input type="text" placeholder="Ingrese el personaje a buscar"></input>
      </form>
      <Cards data={data} />
    </>
  );
}

export default App;
