import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/HomePage/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/update/:id" component={UpdateUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
