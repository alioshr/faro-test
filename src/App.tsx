import "./styles.css";
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { FaroErrorBoundary } from "@grafana/faro-react";
import { withFaroProfiler } from "@grafana/faro-react";
import Routes from "./routes";
import { initializeFaro } from "./faro";

initializeFaro();

function App() {
  return (
    <div className="App">
      <FaroErrorBoundary>
        <BrowserRouter>
          <Link to="/one">Go to Page 1</Link>
          <Link to="/two">Go to Page 2</Link>
          <Routes />
        </BrowserRouter>
      </FaroErrorBoundary>
    </div>
  );
}

export default withFaroProfiler(App);
