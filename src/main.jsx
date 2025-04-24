import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/User.jsx";
import { ViewBrowseBarProvider } from "./contexts/ViewBrowseBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <ViewBrowseBarProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ViewBrowseBarProvider>
        </UserProvider>
    </React.StrictMode>
);
