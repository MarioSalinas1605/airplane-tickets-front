import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from './components/Layout';
import { Landing } from './containers/Landing';
import { ListOfFlights } from './containers/ListOfFlights';
import { ListOfReservations } from './containers/ListOfReservations';
import { UserData } from "./containers/UserData";

import '../src/assets/styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/flights/:id" component={ListOfFlights} />
          <Route exact path="/reservations" component={ListOfReservations} />
          <Route exact path="/confirmation-data" component={UserData} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
