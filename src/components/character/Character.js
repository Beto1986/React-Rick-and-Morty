/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

import BotonDetalle from "../botonDetalle/BotonDetalle";

import styles from "../cards/card.module.css";

import { CardActionArea } from "@mui/material";

const Character = () => {
  // const params = useParams();
  //   let { id, name, status, gender, species, originname, image } = useParams();
  const imagen = useParams();
  //   console.log(imagen);
  //   console.log(clave);

  //   const filterCharacters = data.filter((d) =>
  //     d.name.toLowerCase().includes(textoInput.toLowerCase())
  //   );

  //   let variable = "";
  //   variable = `"${image}"`;

  //   console.log(variable);
  //   console.log({ gender });
  return (
    <>
      {/* <h1>Hola {name}</h1>
      <p>Tu id es: {id}</p>
      <p>Tu status es: {status}</p> */}
      {/* <p>Tu estado es: {status}</p> */}

      {/* <p>tu id es: {image}</p> */}
      {/* <img src={image} width="200" height="200" /> */}

      <div className={styles.contenedorcharacterimage}>
        <Card
          sx={{ maxWidth: 345, maxHeight: 325, borderRadius: "10%" }}
          className={styles.characterimage}
        >
          {/* <CardMedia
            component="image"
            height="200"
            image={image}
            alt={name}
            // className={styles.imagen}
            sx={{
              borderRadius: "50%"
            }}
          /> */}
          <div>
            <img src={imagen} alt="imagen" width="200" height="200" />
            {/* <img
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              //   alt={name}
              width="200"
              height="200"
            /> */}
          </div>

          {/* <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              textAlign="center"
              // className={styles.fuente}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              // className={styles.fuente}
            >
              Estado: {status}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              // className={styles.fuente}
            >
              Genero: {gender}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              // className={styles.fuente}
            >
              Especie: {species}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              textAlign="center"
              // className={styles.fuente}
            >
              Origen: {originname}
            </Typography>
          </CardContent> */}
        </Card>
      </div>
    </>
  );
};

export default Character;
