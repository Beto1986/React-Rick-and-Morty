import Axios from "axios";

const getAllCharacters = async (setData, setIsLoading) => {
  try {
    setIsLoading(true);
    const respuesta = await Axios.get(
      "https://rickandmortyapi.com/api/character"
    );

    setData(respuesta.data.results);
    setTimeout(() => setIsLoading(false), 1000);
  } catch (errores) {
    console.log(errores);
  }
};

export { getAllCharacters };
