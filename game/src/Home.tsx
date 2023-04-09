import React, { useState, useContext, ChangeEvent } from "react";
import { ImageContext } from "./context/imageContext";
import "semantic-ui-css/semantic.min.css";

type ScreenType = "TOSS" | "BATTING" | "BOWLING" | "RESULTS";

const Home: React.FC = () => {
  const [errorUpload, setError] = useState<boolean>(false);
  const img = useContext(ImageContext);
  const url = img?.img[0];
  const setUrl = img?.img[1];
  const screen = useContext(ImageContext);
  console.log(setUrl, "<===setUrl");

  const setScreen = screen?.screen[1];

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (e.target.files && e.target.files[0].type.includes("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUrl?.(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setError(true);
      setUrl?.("");
    }
  };

  // function To start the game

  const startGame = (): void => {
    setScreen?.("TOSS" as ScreenType);
  };

  return (
    <main className="text-red-600 w-85 mx-auto bg-green-200 text-left p-20">
      <h2 className="text-center">Play along!</h2>
      <h3 className="text-center">Rules:</h3>
      <ul className="list-disc list-inside ml-30">
        <li>Select Heads or Tails for the Toss.</li>
        <li>Select whether You want to Bat or Bowl first.</li>
        <li>
          For every Ball select the number You want to put. The number put by
          player who is Batting gets added to score. The Bowler has to guess and
          put the same number for the Batsman to get out.
        </li>
        <li>
          The player Batting first must defend his score while the player
          Batting second must hit atleast one run more than the other to win,
          you know like Cricket.
        </li>
      </ul>
      <br />
      <p className="text-violet-600 font-bold">
        <b>Note:</b> The computer player does not know what you have selected,
        it just puts a random number.
      </p>
      <p className="avatar-upload mt-20">
        <label className="block">
          Upload Your avatar 
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="ml-5"
          />
        </label>
        {errorUpload && (
          <span className="error text-red-500">Invalid file</span>
        )}
      </p>
      {url && (
        <img
          className="avatar-img h-40 w-40 border-2 border-purple-600 rounded-full"
          src={url}
          alt="Avatar"
          style={{maxWidth: "100%",
            height: "50%",
            borderRadius: "50%",
            marginBottom: "2%"}}
        />
      )}
      <br />
      <button
        onClick={startGame}
        className="mt-0 bg-pink-600 border-2 border-yellow-500 rounded-md py-2 px-4 text-white"
      >
        {url ? (
          <React.Fragment>Submit</React.Fragment>
        ) : (
          <React.Fragment>Skip</React.Fragment>
        )}
      </button>
    </main>
  );
};

export default Home;
