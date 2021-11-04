import Loader from "react-loader-spinner";
import ShowCards from "../showcards/ShowCards";
import styles from "../cards/cards.module.css";

const Cards = ({ data, setData, textoInput, isLoading }) => {
  if (data.length === 0)
    return (
      <p style={{ fontSize: 30, textAlign: "center" }}>
        No se encontró personaje/s con el texto: "{textoInput}"
      </p>
    );

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
            />
          </div>
        ) : (
          data &&
          data.map((d) => (
            <>
              <ShowCards
                status={d.status}
                name={d.name}
                id={d.id}
                image={d.image}
                data={data}
                setData={setData}
              />
            </>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
