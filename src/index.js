import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
import BookContext from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <AuthContextProvider>
            <BookContext>
                <App />
            </BookContext>
        </AuthContextProvider>
    </BrowserRouter>
);
