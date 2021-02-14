import Home from "./components/Home/Home";
import "./styles.css";
import { Switch, Route } from "react-router-dom";
import NewTrip from "./components/trips/new/NewTrip";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/trips/new" exact>
          <NewTrip />
        </Route>
      </Switch>
    </div>
  );
}
