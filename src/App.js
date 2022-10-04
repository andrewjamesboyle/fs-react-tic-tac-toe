
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <GameBoard />
    </div>
  );
}

export default App;
