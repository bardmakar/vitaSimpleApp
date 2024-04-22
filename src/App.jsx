
import './App.css';
import Monkeys from './components/Monkeys';
import Justification from './components/Justification';
import AntonSyperCritoi from './components/AntonSyperCritoi';
import MegaSheet from './components/MegaSheet';
import Button from './components/Button/Button';

function App() {
  console.log("App component render")
  return (
    <div className="App">
        <Button onClick={() => console.log("aga")}>НАжми на кнопку</Button>
        <Justification />
        <Monkeys/>
        <AntonSyperCritoi />
        <MegaSheet />
    </div>
  );
}

export default App;
