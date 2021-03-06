import logo from "./logo.svg";
import "./App.css";
import MovieSearchComponent from "./Components/MovieSearchComponent";
import HomeComponent from "./Components/HomeComponent";
import CounterComponent from "./Components/CounterComponent";
import MovieComponent from "./Components/MovieComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <MovieSearchComponent /> */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-movies">Movies</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/search-movies">
            <MovieSearchComponent />
          </Route>
          <Route exact path="/counter">
            <CounterComponent />
          </Route>
          <Route exact path="/movie/:id">
            <MovieComponent />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
