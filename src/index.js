import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle";
import { BrowserRouter } from "react-router-dom";
import BookContext from "./contexts/BookContext";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContext from "./contexts/CartContext";
import WishContext from "./contexts/WishContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <BookContext>
            <WishContext>
                <CartContext>
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </CartContext>
            </WishContext>
        </BookContext>
    </BrowserRouter>
);
