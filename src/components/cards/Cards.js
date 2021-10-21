import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import styles from "../cards/card.module.css";

const Cards = ({ data }) => {
  return (
    <>
      <div className={styles.contenedor}>
        {data &&
          data.map((d) => (
            <>
              <Card sx={{ maxWidth: 345 }} className={styles.imagencard}>
                <CardMedia
                  component="img"
                  height="250"
                  image={d.image}
                  alt={d.name}
                  className={styles.imagen}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className={styles.fuente}
                  >
                    {d.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={styles.fuente}
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
