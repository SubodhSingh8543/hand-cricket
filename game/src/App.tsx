// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Toss } from './Toss/Toss';
import Home from './Home';
import { ImageContext } from './context/imageContext';
import { useContext } from 'react';
import Game from './Game/game';
import Header from './Header/header';
import Footer from './Footer/footer';
function App() {
  const [currentScreen] = useContext<any>(ImageContext).screen.slice(0);
  return (<>
    <Header/>
    <div className="p-0 m-0" style={{backgroundImage:`url('https://img.freepik.com/free-vector/cricket-icons-set-flat_1284-13617.jpg?size=626&ext=jpg&ga=GA1.2.1323011461.1676294460&semt=ais')`}}>
    {/* <h1 className='text-red-500 border-black' > hi  this is Game devs team ..</h1> */}
    {
        currentScreen === 'HOME' && (
          <Home />
        )
      }
      {
        currentScreen === 'TOSS' && (
          <Toss />
        )
      }
      {
        currentScreen === 'GAME' && (
          <Game />
        )
      }
      <Footer/>
    </div>
  </>
  );
}
export default App;