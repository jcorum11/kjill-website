import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Paintings from "./pages/Paintings";
import Inspiration from "./pages/Inspiration";
import Shop from "./pages/Shop";
// import NoMatch from "./pages/NoMatch";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div className="App">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Paintings} />
              <Route exact path="/inspiration" component={Inspiration} />
              <Route exact path="/about" component={About} />
              <Route exact path="/shop" component={Shop} />
              {/* <Route exact path="/nomatch" component={NoMatch} /> */}
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Elements>
  );
}

export default App;
