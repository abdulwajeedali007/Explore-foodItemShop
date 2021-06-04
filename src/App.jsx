import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Index";
import Cart from "./Components/Cart";
import PageNotFound from "./PageNotFound";
import ALLItems from "./Components/AllItems";
import AboutusPage from "./Components/AboutusPage";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-page" component={AboutusPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/items" component={ALLItems} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
