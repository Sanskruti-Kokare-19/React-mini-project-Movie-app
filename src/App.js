import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

import Trend from "./components/trend/trend";

import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Login from "./components/login/login";
import Register from "./components/register/register";
import NewMovies from "./components/newMoviesHeaderSimpleBottom/newMovieComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            {/* <Route exact path="/" ><Trending/></Route> */}
            <Route path="/login"><Login/></Route>
            

            <Route path="/register"><Register/></Route>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
    // <div>
    //   <Login/>
    //   {/* <Register/> */}
    // </div>
  );
}

export default App;
