import React, { createContext, useContext, useState } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../fire";
import { cartContext } from "./CartContext";
import { wishContext } from "./WishContext";
export const bookContext = createContext();
const BookContext = ({ children }) => {
    const [recom, setRecom] = useState();
    const [data, setData] = useState([]);
    const [oneData, setOneData] = useState({});
    const booksCollectionRef = collection(db, "books");
    // ! CREATE
    async function addData(book) {
        await addDoc(booksCollectionRef, book);
        getData();
    }
    // ! READ
    async function getData() {
        const data = await getDocs(booksCollectionRef);
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    // ! READ ONE DATA
    async function getOneData(id) {
        const oneDataRef = doc(db, "books", id);
        const oneData = await getDoc(oneDataRef);
        let rec = oneData.data();
        getRecom(rec.type);
        setOneData(oneData.data());
    }
    // ! UPDATE
    async function editData(id, updatedData) {
        const productDocRef = doc(db, "books", id);
        await updateDoc(productDocRef, updatedData);
        getData();
    }
    // ! DELETE
    async function deleteData(id) {
        const productDocRef = doc(db, "books", id);
        await deleteDoc(productDocRef);
        getData();
    }
    // !FILTER
    async function testData(filter, type) {
        if (type == "All") {
            const data = await getDocs(booksCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } else {
            const q = query(booksCollectionRef, where(filter, "==", type));
            let filterArr = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                filterArr.push(doc.data());
            });
            setData(filterArr);
        }
    }
    // ! SEARCH
    function searchData(input) {
        if (input) {
            let search = data.filter((item) => {
                if (
                    item.name.toLowerCase().includes(input.toLowerCase()) ==
                    true
                ) {
                    return true;
                } else {
                    return false;
                }
            });
            setData(search);
        }
    }
    // ! SORT
    async function testSort(sorting) {
        console.log(sorting);
        if (sorting == "All") {
            const data = await getDocs(booksCollectionRef);
            setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } else {
            const q = query(booksCollectionRef, orderBy("price", sorting));
            let sort = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                sort.push(doc.data());
            });
            setData(sort);
        }
    }
    // ! RECOM
    async function getRecom(type) {
        const q = query(booksCollectionRef, where("type", "==", type));
        let filterArr = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            filterArr.push(doc.data());
        });
        setRecom(filterArr);
    }

    function prover(elemi) {
        let wish = JSON.parse(localStorage.getItem("wish"));
        if (!wish) {
            wish = [];
        }
        let somer = wish.some((elem) => elem.id == elemi);
        return somer;
    }
    function prover2(elemi) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                books: [],
                totalPrice: 0,
            };
        }
        let somer = cart.books?.some((elem) => elem.book.id == elemi);
        return somer;
    }

    const values = {
        addData,
        getData,
        testData,
        testSort,
        prover,
        prover2,
        data,
        getOneData,
        oneData,
        editData,
        deleteData,
        searchData,
        getRecom,
        recom,
    };
    return (
        <bookContext.Provider value={values}>{children}</bookContext.Provider>
    );
};

export default BookContext;
