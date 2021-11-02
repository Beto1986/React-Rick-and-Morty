import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "../showcard/showcard.module.css";

function ShowCard({ character }) {
  return (
    <div className={styles.contenedorcharacterimage}>
      <Card
        sx={{ maxWidth: 345, maxHeight: 345, borderRadius: "10%" }}
        className={styles.imagencardfichatecnica}
      >
        <CardMedia
          component="img"
          height="200"
          image={character.image}
          alt={character.name}
          sx={{
            borderRadius: "50%"
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
            color="text.primary"
            sx={{ fontWeight: "bold" }}
          >
            {character.name}
          </Typography>
          <Typography variant="subtitle2" textAlign="center">
            Status:
            <b> {character.status}</b>
            <br />
            Species:
            <b> {character.species}</b>
            <br />
            Gender:
            <b> {character.gender}</b>
            <br />
            Origin:
            <b> {character.origin?.name}</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ShowCard;
