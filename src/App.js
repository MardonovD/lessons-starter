import ProductListing from "./containers/ProductListing.js";
import ProductDetail from "./containers/ProductDetail.js";
import Header from "./containers/Header.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />}>
            {/* <Route path=":id" element={<UserProfile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// <div className="App">
// <Header />
// <BrowserRouter>
//   <Switch>
//     {/* <Route exact path="/">
//       <Header />
//     </Route> */}
//     <Route exact path={`${match.path}/`}>
//       <ProductListing />
//     </Route>
//     <Route path={`${match.path}/product/:productId`}>
//       <ProductDetail />
//     </Route>
//     <Route exact>
//       <h1>404 Not Found!</h1>
//     </Route>
//   </Switch>
// </BrowserRouter>
// </div>
