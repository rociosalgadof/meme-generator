import React from "react";

export default function Header() {
  return (
    <header className="meme--header">
      <div className="meme--header--firstdiv">
        <img
          src="https://res.cloudinary.com/df74sm4un/image/upload/v1650383760/memeGenerator/troll_pp6bjv.svg"
          className="meme--header--div--img"
        />
        <p className="meme--header--div--p">Meme Generator</p>
      </div>
      <div className="meme--header--seconddiv">
        <p className="meme--header--seconddiv--p">React Course - Project 3</p>
      </div>
    </header>
  );
}
