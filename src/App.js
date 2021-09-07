import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from './components/Layout';
import { Landing } from './containers/Landing';
import { ListOfFlights } from './containers/ListOfFlights';

import '../src/assets/styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/flights" component={ListOfFlights} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
