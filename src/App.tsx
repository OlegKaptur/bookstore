import React from "react";
import { Provider } from "react-redux";

import PublicRoutes from "./router/Public";
import "./variables.css";
import "reset-css";
import store from "store/books";

function App() {
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
}

export default App;
