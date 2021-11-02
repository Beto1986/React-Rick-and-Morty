/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowCard from "../showcard/ShowCard";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(async () => {
    const datos = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    setCharacter(datos.data);
  }, []);

  return <ShowCard character={character} />;
};

export default Character;
