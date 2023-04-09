import React, { useContext, useState } from 'react';
import { ImageContext }  from "../context/imageContext"
import bat from "../assets/cricket-bat.png"
import ball from '../assets/ball.png';
import computer from '../assets/laptop.png';
import user from '../assets/user.png';
 import "./game.css"
 

/**
 * @component The game component
 * @description Contains core of the game. Uses random number generation for score of computer.
 */
const Game: React.FC = () => {
  const [batFirst, setBatFirst] = useContext<any>(ImageContext).batting;
  const [currentBatting, setBatting] = useState<string>(batFirst);
  const [currentRun, setRun] = useState<number|string>("");
  const [disableFactor, disableButton] = useState<boolean>(false);
  const [avatarAnime, setAnime] = useState<boolean>(false);
  const runs: number[] = [1, 2, 3, 4, 5, 6];
  const [url, setUrl] = useContext<any>(ImageContext).img;
  const [userOutCome, setUserOutcome] = useState<number>(0);
  const [computerOutCome, setComputerOutcome] = useState<number>(0);
  const [inning, setInning] = useState<string>('FIRST');
  const [userScore, setUserScore] = useState<number>(0);
  const [compScore, setCompScore] = useState<number>(0);
  const [setScreen] = useContext<any>(ImageContext).screen.slice(-1);

  /**
   * @function To handle scoring on click
   * @param {number} run Run clicked by user
   * @description Uses setTimeout to wait for avatars to stop bouncing and process score later
   */
  const score = (run: number): void => {
    disableButton(true);
    setAnime(true);
    setTimeout(() => {
      disableButton(false);
      setAnime(false);
      processScore(run)
    }, 3000);
  }

  /**
   * @function To process the score based on randomly generated computer score
   * @param {number} run Run clicked by user
   * @description Compares randomly generated computer scores and processes the data based on state
   */
  const processScore = (run: number): void => {
    const compOutcome :number|string = Math.floor(Math.random() * 6) + 1;
    setUserOutcome(run);
    setComputerOutcome(compOutcome);
    if (currentBatting === 'USER') {
      if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(run.toString());
          setUserScore(userScore + run);
        } else {
          setRun('WICKET');
          setBatting('COMPUTER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (userScore + run >= compScore + 1) {
            setRun('You win the game');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(run.toString());
          }
          setUserScore(userScore + run);
        } else {
          if (userScore + run === compScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    } else {
       if (inning === 'FIRST') {
        if (compOutcome !== run) {
          setRun(compOutcome);
          setCompScore(compScore + compOutcome);
        } else {
          setRun('WICKET');
          setBatting('USER');
          setInning('SECOND');
        }
      } else {
        if (compOutcome !== run) {
          if (compScore + compOutcome >= userScore + 1) {
            setRun('You lost the game!');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun(compOutcome);
          }
          setCompScore(compScore + compOutcome);
        } else {
          if (compScore + compOutcome === userScore) {
            setRun('Match tied');
            setInning('GAME OVER');
            disableButton(true);
          } else {
            setRun('You win!');
            setInning('GAME OVER');
            disableButton(true);
          }
        }
      }
    }
  }
console.log(currentRun,"currentRun")
  return (
    <main>
      <h3>Game</h3>
      <div className="avatar-container">
        <div>
          <h4>User</h4>
          Runs: {userScore}
          {currentBatting === "USER" ? (
            <img src={bat} className="indicator-image" alt="Player batting" />
          ) : (
            <img src={ball} className="indicator-image" alt="Player bowling" />
          )}
          {url ? (
            <img
              className={`avatar-img game ${avatarAnime ? "animate" : ""}`}
              src={url}
              alt="Player Avatar"
            />
          ) : (
            <img
              className={`avatar-img game ${avatarAnime ? "animate" : ""}`}
              src={user}
              alt="Player Avatar"
            />
          )}
        </div>
        <div className="run-container">
          {`Inning: ${inning}`}
          <br />
          {isNaN(+currentRun) ? (
            <div>{currentRun}</div>
          ) : (
            <div>{`This ball: ${currentRun}`}</div>
          )}
          <br />
          {userOutCome.toString() + " : " + computerOutCome.toString()}
          <br />
          {inning === "GAME OVER" && (
            <React.Fragment>
              <p>Good game! See you soon!</p>
              <button
                onClick={() => {
                  setUrl("");
                  setBatFirst("");
                  setScreen("HOME");
                }}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setBatFirst("");
                  setScreen("TOSS");
                }}
              >
                Restart game
              </button>
            </React.Fragment>
          )}
        </div>
        <div>
          <h4>Computer</h4>
          Runs: {compScore}
          {currentBatting === "COMPUTER" ? (
            <img src={bat} className="indicator-image" alt="Computer batting" />
          ) : (
            <img
              src={ball}
              className="indicator-image"
              alt="Computer bowling"
            />
          )}
          <img
            className={`avatar-img game ${avatarAnime ? "animate" : ""}`}
            src={computer}
            alt="Player Avatar"
          />
        </div>
      </div>
      <div className="buttons-container">
        {runs.map((r) => (
          <button
            disabled={disableFactor}
            key={r}
            className="run-button border-red-500 drop-shadow-4xl bg-cyan-400 w-18 h-8 rounded-lg"
            onClick={() => score(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </main>
  );
}

export default Game;
