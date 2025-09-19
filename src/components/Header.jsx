import "../components/Header.css";
import Scoreboard from "./Scoreboard";

const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="../assets/venezuela.svg" alt="Imagen" />
        <h1>Venezuela Memory Game</h1>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
