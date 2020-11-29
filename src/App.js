import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Login from './components/login/Login';
import Registro from './components/registro/Registro';

function App() {
  return (
    <div className="App">
      <Router>
        <Login />
        <Switch>
          <Route path="/registro" component={Registro} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
