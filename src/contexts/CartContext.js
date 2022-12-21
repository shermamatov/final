import React, { createContext, useContext, useState } from "react";

import { wishContext } from "./WishContext";
export const cartContext = createContext();
const CartContext = ({ children }) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    function calcTotalPrice(products) {
        return products.reduce((acc, curr) => {
            return (acc += curr.subPrice);
        }, 0);
    }
    const [cartData, sertCartData] = useState(cart);

    function calcSubPrice(book) {
        return +book.count * book.book.price;
    }
    function getCart() {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            localStorage.setItem(
                "cart",
                JSON.stringify({ books: [], totalPrice: 0 })
            );
            cart = { books: [], totalPrice: 0 };
        }
        sertCartData(cart);
    }

    function addToCart(book) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                books: [],
                totalPrice: 0,
            };
        }
        let cartData = {
            book,
            count: 1,
            subPrice: +book.price,
        };
        let somer = cart.books.some((elem) => elem.book.id == book.id);
        if (!somer) {
            cart.books.push(cartData);
        } else {
            cart.books = cart.books.filter((elem) => elem.book.id !== book.id);
        }
        cart.totalPrice = calcTotalPrice(cart.books);
        localStorage.setItem("cart", JSON.stringify(cart));
        sertCartData(cart);
    }

    function deleteInCart(id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.books = cart.books.filter((elem) => elem.book.id !== id);
        cart.totalPrice = calcTotalPrice(cart.books);
        localStorage.setItem("cart", JSON.stringify(cart));
        sertCartData(cart);
    }
    function changeCount(count, id) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.books = cart.books.map((book) => {
            if (book.book.id === id) {
                book.count = count;
                book.subPrice = calcSubPrice(book);
            }
            return book;
        });
        cart.totalPrice = calcTotalPrice(cart.books);
        localStorage.setItem("cart", JSON.stringify(cart));
        sertCartData(cart);
    }

    const values = {
        addToCart,
        cartData,
        deleteInCart,
        changeCount,
        getCart,
    };
    return (
        <cartContext.Provider value={values}>{children}</cartContext.Provider>
    );
};

export default CartContext;
