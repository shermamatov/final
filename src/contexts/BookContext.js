import React, { createContext, useState } from "react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import { db } from "../fire";
export const bookContext = createContext();
const BookContext = ({ children }) => {
    const [data, setData] = useState([]);
    const [oneData, setOneData] = useState({});
    const booksCollectionRef = collection(db, "books");

    async function addData(book) {
        await addDoc(booksCollectionRef, book);
        getData();
    }

    async function getData() {
        const data = await getDocs(booksCollectionRef);
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    async function getOneData(id) {
        const oneDataRef = doc(db, "books", id);
        const oneData = await getDoc(oneDataRef);
        setOneData(oneData.data());
    }

    async function editData(id, updatedData) {
        const productDocRef = doc(db, "books", id);
        await updateDoc(productDocRef, updatedData);
        getData();
    }

    async function deleteData(id) {
        const productDocRef = doc(db, "books", id);
        await deleteDoc(productDocRef);
        getData();
    }
    const values = {
        addData,
        getData,
        data,
        getOneData,
        oneData,
        editData,
        deleteData,
    };
    return (
        <bookContext.Provider value={values}>{children}</bookContext.Provider>
    );
};

export default BookContext;
