import "./App.scss";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import ReactComponent from "./pages/React/React";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Angular from "./pages/Angular/Angular";
import NodeJs from "./pages/NodeJs/NodeJs";
import Html from "./pages/Html/Html";
import MenuMobile from "./components/MenuMobile/MenuMobile";

function App() {
  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 768) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Oscar Serna Carvajal Dev. Junior</title>
      </Helmet>
      <Router>
        <div className="app">
          {!breakpoint ? <MenuMobile /> : null}
          {breakpoint ? <Header className="app_header" /> : null}

          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/work" render={() => <Portfolio />} />
            <Route exact path="/work/angular" render={() => <Angular />} />
            <Route exact path="/work/react" render={() => <ReactComponent />} />
            <Route exact path="/work/nodejs" render={() => <NodeJs />} />
            <Route exact path="/work/html" render={() => <Html />} />
            <Route exact path="/contact" render={() => <Contact />} />
          </Switch>
          <Footer className="app_footer" />
        </div>
      </Router>
    </>
  );
}

export default App;
