import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import { AuthProvider } from "context/authContext";

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
