import React from "react";
import "./App.css";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
//import Products from './components/pages/Products/Products';
//import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Pricing";
import Footer from "./components/pages/Footer.js/Footer";
import FormUp from "./FormSignup/Form";
import FormIn from "./FormSignin/Form";
import firebase from "./config/firebase";

function App() {
  const [user, setuser] = React.useState({})
  
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc("1Ed9chqqFSfHpWOGPnJDuErAgKx2")
      .get()
      .then((doc) => {
       const user = doc.data()
       setuser(user)
        console.log(user.email, "User Document");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("firebase", firebase);
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-up-form" component={FormUp} />
        <Route path="/sign-in-form" component={FormIn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
