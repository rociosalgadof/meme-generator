import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    setAllMemes(data.data.memes);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick(e) {
    setMeme(function (oldValue) {
      const randomNumber = Math.floor(Math.random() * allMemes.length + 1);
      return {
        ...oldValue,
        randomImage: allMemes[randomNumber].url,
      };
    });
  }
  function handleChange(e) {
    setMeme(function (prevMeme) {
      const { name, value } = e.target;
      return { ...prevMeme, [name]: value };
    });
  }
  return (
    <main className="meme-div">
      <form onSubmit={handleSubmit} className="meme--form">
        <div className="meme--form--div">
          <input
            type="text"
            className="meme--form--input"
            name="topText"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            className="meme--form--input"
            name="bottomText"
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={handleClick} className="meme--button">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme--img" />
        <h2 className="meme--text top" name="topText">
          {meme.topText}
        </h2>
        <h2 className="meme--text bottom" name="bottomText">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
