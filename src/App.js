import Header from "./components/Header";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Main from "./components/Main";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
