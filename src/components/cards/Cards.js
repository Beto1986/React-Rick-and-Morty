// import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Loader from "react-loader-spinner";

import BotonDetalle from "../botonDetalle/BotonDetalle";
import { Link } from "react-router-dom";
import Character from "../character/Character";

import styles from "../cards/card.module.css";
import { useHistory } from "react-router-dom";

const Cards = ({ data, textoInput, isLoading }) => {
  const history = useHistory();
  const [dataNueva, setDataNueva] = useState([]);

  useEffect(() => {
    setDataNueva(data);
  }, [data]);

  if (data.length === 0)
    return (
      <p style={{ fontSize: 30, textAlign: "center" }}>
        No se encontró personaje/s con el texto: "{textoInput}"
      </p>
    );

  let estado = "";

  // console.log(dataNueva);

  return (
    <>
      <div className={styles.contenedor}>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader
              type="ThreeDots"
              color="rgb(13, 233, 233)"
              height={100}
              width={100}
              // className={styles.loader}
            />
          </div>
        ) : (
          data &&
          data.map((d) => (
            <>
              {(() => {
                if (d.status === "Alive") {
                  estado = "green";
                  // console.log(estado);
                } else if (d.status === "Dead") {
                  estado = "red";
                  // console.log(estado);
                } else {
                  estado = "#D3D3D3"; // Gris claro
                  // console.log(estado);
                }
              })()}

              <Card
                key={d.id}
                sx={{ maxWidth: 345, maxHeight: 325, borderRadius: "10%" }}
                className={styles.imagencard}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={d.image}
                  alt={d.name}
                  // className={styles.imagen}
                  sx={{
                    borderRadius: "50%",
                    // borderColor: estado,
                    // borderStyle: "solid",
                    border: `10px solid ${estado}`
                  }}
                  // onClick={() => {
                  //   history.push(`/Character/${d.image}`);
                  // }}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    textAlign="center"
                    // className={styles.fuente}
                  >
                    {d.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    // className={styles.fuente}
                  >
                    {d.status}
                  </Typography>
                  {/* <button
                onClick={() => {
                  history.push(
                    // `/Character/${d.id}/${d.name}/${d.status}/${d.gender}/${d.species}/${d.origin.name}/${d.image}`
                    `/Character/${d.image}`
                  );
                  // console.log(d.image);
                }}

              >
                Detalle
              </button> */}
                  {/* <BotonDetalle key={d.id} image={d.image} /> */}
                  <BotonDetalle
                    clave={d.id}
                    imagen={d.image}
                    dataNueva={dataNueva}
                  />
                </CardContent>
              </Card>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
