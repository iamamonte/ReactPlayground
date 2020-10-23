import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/**stylesheets */
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/app.css';
import './styles/TurnUp.css'

/**React Components */
import Container from "react-bootstrap/Container";

/* Custom Components*/
import Playground from "./components/Playground";
import PageNotFound from "./components/PageNotFound";
import ReactTask2 from "./components/interns/ReactTask2";
import soniaPage from "./components/interns/soniaPage";
import AdilPage from "./components/interns/AdilPage";
import CreateAccount from "./components/CreateAccount";
import SignUpForm from "./components/TestingForm";
import NavBarComponent from "./components/NavBarComponent"
import ResourcePage from "./components/ResourcePage";
import HomePage from "./components/HomePage";

/** React-redux Components */
import { Provider } from 'react-redux';

//Store
import configureStore from "./store";
import BootstrapFormikExample from "./components/BootstrapFormikExample";

const App = () => {

  const store = configureStore();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBarComponent img='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
        <Container className="my-4">
          <Switch>
          <Route path='/' exact component={HomePage} />
            <Route path='/playground' exact component={Playground} />
            <Route path='/interns/reacttask2' component={ReactTask2} />
            <Route path="/interns/soniaPage" component={soniaPage} />
            <Route path="/interns/AdilPage" component={AdilPage} />
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/TestingForm" component={SignUpForm}/>
            <Route path="/ReactFormikTest" component={BootstrapFormikExample} />
            <Route path="/ResourcePage" component={ResourcePage} />

            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  )
};

export default App;
