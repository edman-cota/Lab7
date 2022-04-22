import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "./App.scss";
import Start from "./components/Start.js";
import "./components/Start.scss";
import audios from "./assets/resources/audio.mp3";
import logo from "./assets/resources/logo.svg";

const App = () => {
  const [maze, setMaze] = useState("");
  const number = 7;
  const [isStarted, setIsStarted] = useState(false);
  const [audioStatus, changeAudioStatus] = useState(false);
  const [audio, setAudio] = useState(new Audio(audios));
  // let audioGame = new Audio(audio);
  const myRef = useRef();

  useEffect(() => {
    fetch(`https://maze.juanelcaballo.club/?type=json&w=${number}&h=${number}`)
      .then((response) => response.json())
      .then((result) => {
        setMaze(result);
        console.log(result);
      });
  }, []);

  const handleStart = () => {
    audio.play();
    // audioGame.play();
    // myRef.current.play();
    // changeAudioStatus(true);
    setIsStarted(true);
  };

  const handlePauseAudio = () => {
    audio.pause();
    changeAudioStatus(false);
  };

  console.log(audio);

  return (
    <div
      style={{
        background: "#1C232B",
        height: "100vh",
        color: "white",
      }}
    >
      {isStarted ? (
        <>
          <div className="navbar">
            <img src={logo} width="30" height="30" />
            <p> L a b e r i n t o</p>
            <button onClick={() => setIsStarted(false)}>Terminar juego</button>
            <button onClick={handlePauseAudio}>Parar audio</button>
          </div>
          <div>
            {/* <audio>
              <source src={audioGame} ref={myRef} type="audio/mpeg" />
            </audio> */}
            <h1>{maze}</h1>
          </div>
        </>
      ) : (
        <div className="start-screen">
          <button onClick={handleStart}>Comenzar</button>
        </div>
      )}
    </div>
  );
};
export default App;
