import HeaderBar from "./component/layout/HeaderBar";
import Banner from "./component/layout/Banner";
import MovieList from "./component/layout/MovieList";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import MovieDetail from "./component/layout/MovieDetail";
function App() {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/";
  return (
    <Provider store={store}>
      <Router>
        <HeaderBar />
        <Switch>
          <Redirect from="/" exact to="/starmovie" />
          <Route path={"/starmovie"} exact component={Banner} />
          <Route path={"/starmovie/detail/:id"} component={MovieDetail} />
        </Switch>
        <Container>
          <Route path={"/starmovie"} exact component={MovieList} />
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
