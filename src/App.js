import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login  from "./Components/Login/Login";
import Home from "./Components/Home/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
