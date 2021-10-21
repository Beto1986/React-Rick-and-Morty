import Axios from "axios";

const getAllCharacters = async (setData) => {
  const respuesta = await Axios.get(
    "https://rickandmortyapi.com/api/character"
  );

  setData(respuesta.data.results);

  //   return respuesta.data.results;

  //   setData(respuesta.data);
  //   console.log(respuesta.data.results);
};

export { getAllCharacters };
