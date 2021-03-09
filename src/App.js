
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import CountryDetail from './Components/CountryDetail/CountryDetail';


function App() {
  return (
    <div>
       
      <Router>
      <Header/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail />
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
