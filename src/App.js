import Cards from "./components/cards/Cards";
import { getAllCharacters } from "./services/Characters";
import { useState, useEffect } from "react";
import styles from "./app.module.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Character from "./components/character/Character";

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
      {/* <Cards data={data} /> */}

      {/* <Cards
        data={filterCharacters}
        textoInput={textoInput}
        isLoading={isLoading}
      /> */}
      <Router>
        {/* <Link to="/">Inicio</Link>
        <Link to="/Character">Character</Link> */}
        <Switch>
          <Route
            // exact
            // path="/character/:id/:name/:status/:image"
            // path="/character/:id/:name/:status/:gender/:species/:originname/:image"
            path="/character/:image"
            component={Character}
            // render={() => <Character />}
          />
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
