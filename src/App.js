import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/rgb/:red/:green/:blue"></Route>
      </Switch>
    </div>
  );
}

export default App;
