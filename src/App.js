// import "./App.css";
// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   useRoutes,
//   Routes,
// } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Header from "./containers/Header";
// import ProductDetail from "./containers/ProductDetail";
// import ProductListing from "./containers/ProductListing";

// function App() {
//   // const AppRoutes = () => {
//   // let routes = useRoutes([
//   // { path: "/home", element: <Home /> },
//   // { path: "product", element: <ProductListing /> },
//   // { path: "/product/:productId", element: <ProductDetail /> },
//   // { path: "about", element: <About /> },
//   // { path: "contact", element: <Contact /> },
//   // { path: "team", element: <Team /> },
//   // { path: "testimonial", element: <TestimonialListing /> },
//   // ...
//   // ]);
//   // return routes;

//   return (
//     <>
//       <div className="App">
//         <Router>
//           <Header />
//           <Routes>
//             <Route path="/" element={ProductListing} />
//             <Route path="/product/:productId" element={ProductDetail} />
//             <Route> 404 Not Found</Route>
//           </Routes>
//         </Router>
//       </div>
//     </>
//   );
// }

// export default App;

import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" exact element={<ProductListing />} />
          <Route
            exact
            path="/product/:productId"
            exact
            element={<ProductDetail />}
          />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
