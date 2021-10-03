import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Person from './pages/Person';

const Routes : React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/characters/:id"><Person /></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;