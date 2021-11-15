import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/" component={Login}/>
        <Route path ="/signup" component={Signup}/>
        <Route path ="/home" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
