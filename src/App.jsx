import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [stickers, setStickers] = useState([]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const fetchStickers = async () => {
    const searchKeyword = "venezuela";
    const api_key = "6StIXl5cm0j5pG7YrxkEWg7ioric8V3z";
    const limit = 12;
    const offset = Math.floor(Math.random() * 100);
    const url = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${api_key}&limit=${limit}&offset=${offset}`;
    try {
      const res = await fetch(url);
      const { data } = await res.json();

      const stickersData = data.map((sticker) => ({
        id: sticker.id,
        url: sticker.images.fixed_height.url,
      }));

      setStickers(stickersData);
    } catch (error) {
      console.log("Ha ocurrido un error", error);
    }
  };

  useEffect(() => {
    const storedBest = localStorage.getItem("bestScore");
    if (storedBest) {
      setBestScore(Number(storedBest));
    }
    fetchStickers();
  }, []);

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore)
  }, [bestScore])

  useEffect(() => {
    fetchStickers();
  }, []);

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedIds([]);
      fetchStickers();
    } else {
      setScore((prev) => prev + 1);
      setClickedIds((prev) => [...prev, id]);
      setStickers((prev) => shuffleArray(prev));
    }
  };
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Main
        handleCardClick={handleCardClick}
        stickers={stickers}
        setStickers={setStickers}
      />
      <Footer />
    </>
  );
}

export default App;
