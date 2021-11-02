import Cards from "./components/cards/Cards";
import { getAllCharacters } from "./services/Characters";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Character from "./components/character/Character";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [textoInput, setTextoInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCharacters(setData, setIsLoading);
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
      <Router>
        <Switch>
          <Route path="/character/:id" component={Character}></Route>
          <Route
            exact
            path="/"
            render={() => (
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
                <Cards
                  data={filterCharacters}
                  textoInput={textoInput}
                  isLoading={isLoading}
                />
              </>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
