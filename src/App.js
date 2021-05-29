import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Dictionary from "./dictionary/Dictionary";
import PoetryCollection from "./poetry/PoetryCollection";
import Hangman from "./Hangman";
import PoemLines from "./poetry/PoemLines";
import './App.css';

function App() {
  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Dictionary />
        </Route>
        <Route exact path="/poetry-collection">
          <PoetryCollection />
        </Route>
        <Route exact path="/hangman">
          <Hangman />
        </Route>
        <Route exact path="/poetry-collection/:title">
          <PoemLines />
        </Route>
        <Route path="*">
          <h1>404 Page Not Found (⓿_⓿)   🕳   💨</h1>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
