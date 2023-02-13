import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";
import App from "./App";

const store = createStore(reducer)

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<Provider store={store}><App /></Provider>);
