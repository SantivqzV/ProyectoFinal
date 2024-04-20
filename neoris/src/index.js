import React from "react";
import {createRoot} from "react-dom/client";

import './index.css';
import App from "./App";
import {ContextProvider} from "./contexts/ContextProvider";

const root = document.getElementById("root");
createRoot(root).render(
    <ContextProvider>
        <App />
    </ContextProvider>
);