import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Person from './pages/Person';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/person"><Person /></Route>
        </Switch>
    </BrowserRouter>
  );
}