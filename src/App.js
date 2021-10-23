import Cards from "./components/cards/Cards";
import { getAllCharacters } from "./services/Characters";
import { useState, useEffect } from "react";
import styles from "./app.module.css";

function App() {
  const [data, setData] = useState([]);
  const [textoInput, setTextoInput] = useState("");

  useEffect(() => {
    getAllCharacters(setData);
  }, []);

  // console.log(data);

  const handleInputChange = (e) => {
    setTextoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(textoInput);
  };

  const filterCharacters = data.filter((d) =>
    d.name.toLowerCase().includes(textoInput.toLowerCase())
  );

  return (
    <>
      <div className={styles.title}>Rick and Morty</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese el personaje a buscar"
          value={textoInput}
          onChange={handleInputChange}
        ></input>
      </form>
      {/* <Cards data={data} /> */}
      <Cards data={filterCharacters} textoInput={textoInput} />
    </>
  );
}

export default App;
