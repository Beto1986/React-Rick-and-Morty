import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "../cards/card.module.css";

const Cards = ({ data, textoInput }) => {
  if (data.length === 0)
    return (
      <p style={{ fontSize: 30, textAlign: "center" }}>
        No se encontró personaje/s con el texto: "{textoInput}"
      </p>
    );

  let estado = "";

  return (
    <>
      <div className={styles.contenedor}>
        {data &&
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
                </CardContent>
              </Card>
            </>
          ))}
      </div>
    </>
  );
};

export default Cards;
