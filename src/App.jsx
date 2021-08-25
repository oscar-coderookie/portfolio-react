import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, Suspense } from "react";
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
import NodeJsDetail from "./pages/NodeJsDetail/NodeJsDetail";
import Html from "./pages/Html/Html";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import ReactDetail from "./pages/ReactDetail/ReactDetail"
import AngularDetail from "./pages/AngularDetail/AngularDetail";

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
          <Suspense fallback={<div>Loading...</div>} >
            <Switch>
              <Route exact path="/" render={(props) => <Home {...props} />} />
              <Route exact path="/work" render={(props) => <Portfolio  {...props} />} />
              <Route exact path="/work/angular" render={(props) => <Angular {...props}  />} />
              <Route exact path="/work/angular/:id" render={(props) => <AngularDetail {...props}  />} />
              <Route exact path="/work/react" render={(props) => <ReactComponent {...props}  />} />
              <Route exact path="/work/react/:id" render={(props) => <ReactDetail {...props} />} />
              <Route exact path="/work/nodejs" render={(props) => <NodeJs {...props} />} />
              <Route exact path="/work/nodejs/:id" render={(props) => <NodeJsDetail {...props} />} />
              <Route exact path="/work/html" render={(props) => <Html {...props}  />} />
              <Route exact path="/contact" render={(props) => <Contact {...props}  />} />
            </Switch>
          </Suspense>

          <Footer className="app_footer" />
        </div>
      </Router>
    </>
  );
}

export default App;
