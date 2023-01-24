import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import Main from './components/Main/Main.js';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/rgb/:red/:green/:blue">
          <Main />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
