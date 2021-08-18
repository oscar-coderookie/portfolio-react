import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailPortfolio from "./pages/DetailPortfolio/DetailPortfolio";

function App() {
  return (
    <Router>
      <div className="app">
        <Header className="app_header" />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/work" render={() => <Portfolio />} />
          <Route exact path="/work/:id" render={() => <DetailPortfolio />} />
          <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
        <Footer className="app_footer" />
      </div>
    </Router>
  );
}

export default App;
