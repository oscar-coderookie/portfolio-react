import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Footer, MenuMobile, LoadingScreen } from "./components";

// lazy loading..
const Home = lazy(() => import('./pages/Home/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Angular = lazy(() => import('./pages/Angular/Angular'));
const AngularDetail = lazy(() => import('./pages/AngularDetail/AngularDetail'));
const ReactComponent = lazy(() => import('./pages/React/React'));
const ReactDetail = lazy(() => import('./pages/ReactDetail/ReactDetail'));
const NodeJs = lazy(() => import('./pages/NodeJs/NodeJs'));
const NodeJsDetail = lazy(() => import('./pages/NodeJsDetail/NodeJsDetail'));
const Html = lazy(() => import('./pages/Html/Html'));


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
          <Suspense fallback={<LoadingScreen/>} >
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
