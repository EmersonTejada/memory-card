import "../components/Card.css";

const Card = ({ url, handleCardClick, id}) => {
  return (
    <div className="card" onClick={() => handleCardClick(id)}>
      <img src={url} alt="Imagen" />
    </div>
  );
};

export default Card;
