import Axios from "axios";

const getAllCharacters = async (setData) => {
  try {
    const respuesta = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setData(respuesta.data.results);
  } catch (errores) {
    console.log(errores);
  }
};

export { getAllCharacters };
