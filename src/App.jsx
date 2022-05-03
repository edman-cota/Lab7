/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.scss";
import "./components/Start.scss";
import audios from "./assets/resources/audio.mp3";
import logo from "./assets/resources/logo.svg";

const App = () => {
  const [maze, setMaze] = useState("");
  const number = 7;
  const [isStarted, setIsStarted] = useState(false);
  const [audioStatus, changeAudioStatus] = useState(false);
  const [audio, setAudio] = useState(new Audio(audios));

  useEffect(() => {
    fetch(`https://maze.juanelcaballo.club/?type=json&w=${number}&h=${number}`)
      .then((response) => response.json())
      .then((result) => {
        setMaze(result);
      });
  }, []);

  const handleStart = () => {
    audio.play();
    setIsStarted(true);
  };

  const handlePauseAudio = () => {
    audio.pause();
    changeAudioStatus(false);
  };

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
            <img src={logo} width="30" height="30" alt="website logo" />
            <p> L a b e r i n t o</p>
            <button type="button" onClick={() => setIsStarted(false)}>
              Terminar juego
            </button>
            <button type="button" onClick={handlePauseAudio}>
              Parar audio
            </button>
          </div>
          <div>
            <h1>{maze}</h1>
          </div>
        </>
      ) : (
        <div className="start-screen">
          <button type="button" onClick={handleStart}>
            Comenzar
          </button>
        </div>
      )}
    </div>
  );
};
export default App;
