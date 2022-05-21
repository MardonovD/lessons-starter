import ProductListing from "./containers/ProductListing.js";
import ProductDetail from "./containers/ProductDetail.js";
import Header from "./containers/Header.js";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/">
            <Header />
          </Route> */}
          <Route path="/">
            <ProductListing />
          </Route>
          <Route path="/product/:productId">
            <ProductDetail />
          </Route>
          <Route>
            <h1>404 Not Found!</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
