import React, { createContext, useState } from "react";
export const wishContext = createContext();
const WishContext = ({ children }) => {
    const [wish, setWish] = useState(localStorage.getItem("wish"));
    function addToWish(book) {
        let wish = JSON.parse(localStorage.getItem("wish"));
        if (!wish) {
            wish = [];
        }
        let somer = wish.some((elem) => elem.id == book.id);
        if (!somer) {
            wish.push(book);
        } else {
            wish = wish.filter((elem) => elem.id !== book.id);
        }
        localStorage.setItem("wish", JSON.stringify(wish));
        setWish(wish);
    }
    function getWish() {
        let wish = JSON.parse(localStorage.getItem("wish"));
        setWish(wish);
    }
    const values = { addToWish, wish, getWish };
    return (
        <wishContext.Provider value={values}>{children}</wishContext.Provider>
    );
};

export default WishContext;
