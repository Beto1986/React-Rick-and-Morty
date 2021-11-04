import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import styles from "../showcards/showcards.module.css";

function ShowCards({ status, name, id, image, data, setData }) {
  let estado = "";

  const handleClickEliminar = (id) => {
    const deleteCharacter = data.filter((d) => id !== d.id);
    setData(deleteCharacter);
  };

  return (
    <>
      {(() => {
        if (status === "Alive") {
          estado = "green";
        } else if (status === "Dead") {
          estado = "red";
        } else {
          estado = "#D3D3D3"; // Gris claro
        }
      })()}

      <Card
        key={id}
        sx={{ maxWidth: 345, maxHeight: 360, borderRadius: "10%" }}
        className={styles.imagencard}
      >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{
            borderRadius: "50%",
            border: `10px solid ${estado}`
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {status}
          </Typography>
          <Link to={`/character/${id}`} style={{ textDecoration: "none" }}>
            <button className={styles.botonDetalle}>Detalle</button>
          </Link>
          <button
            className={styles.botonEliminar}
            onClick={() => handleClickEliminar(id)}
          >
            Eliminar
          </button>
        </CardContent>
      </Card>
    </>
  );
}

export default ShowCards;
