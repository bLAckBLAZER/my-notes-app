import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, LoaderProvider, DataProvider } from "./contexts";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <AuthProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AuthProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
