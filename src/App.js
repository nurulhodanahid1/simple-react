import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player';
import fakeData from './fakeData/index';

function App() {
  const [players, setPlayers] = useState(fakeData);
  const [cart, setCart] = useState([]);

  const handleAddPlayer = (players) => {
    const newCart = [...cart, players];
    setCart(newCart);
  }
  return (
    <div>
      <Header></Header>
      <Cart cart = {cart}></Cart>
      {
        players.map(player => <Player player={player} handleAddPlayer = {handleAddPlayer} key={player.id}></Player>)
      }
    </div>
  );
}

export default App;