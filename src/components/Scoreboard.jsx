const Scoreboard = ({score, bestScore}) => {
  return (
    <div className="score-container">
      <div className="score">
        <strong>Score: </strong>
        <p>{score}</p>
      </div>
      <div className="score">
        <strong>Best: </strong>
        <p>{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
