import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import TestPage from "./index";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { screen } from "@testing-library/react";

const history = createMemoryHistory();

const testFn = () =>
  render(<TestPage />, {
    wrapper: ({ children }) => (
      // @ts-ignore
      <Router history={history as any}>{children}</Router>
    )
  });

describe("test faro route", () => {
  it("should render", () => {
    history.replace("./");
    testFn();

    expect(screen.getByText("I am a page")).toBeInTheDocument();
  });
});
