import React from 'react'

const Game = () => {
  return (
    <div>
      <h1 style={{ fontWeight: 'bold', fontSize: '2em', margin: '20px 0' }}>NEORIS QUEST</h1>
      <iframe
        title="Neoris Quest"
        src="https://itch.io/embed-upload/9972479?color=333333"
        allowFullScreen
        width="720"
        height="450"
        frameBorder="1"
      >
        <p>Your browser does not support iframes.</p>
        <a href="https://aylenaf.itch.io/parallax">Play Neoris Quest on itch.io</a>
      </iframe>
    </div>
  );
};


export default Game