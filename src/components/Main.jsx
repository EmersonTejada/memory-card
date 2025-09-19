import "../components/Main.css";
import Card from "./Card";

const Main = ({ handleCardClick, stickers }) => {
  return (
    <>
      <main>
        <section className="card-container">
          {stickers.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            stickers.map((sticker) => (
              <Card
                key={sticker.id}
                url={sticker.url}
                handleCardClick={handleCardClick}
                id={sticker.id}
              />
            ))
          )}
        </section>
      </main>
    </>
  );
};

export default Main;
