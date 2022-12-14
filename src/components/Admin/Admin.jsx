import React, { useContext, useState } from "react";
import { bookContext } from "../../contexts/BookContext";
// import "./Admin.css";
const Admin = () => {
    const [name, setName] = useState("");
    const [autor, setAutor] = useState("");
    const [price, setPrice] = useState(0);
    const [disc, setDisc] = useState("");
    const [img, setImg] = useState("");
    const { addData } = useContext(bookContext);
    function handleData() {
        let obj = { name, autor, price, disc, img };
        addData(obj);
        console.log(obj);
    }
    return (
        <div>
            <input
                placeholder="book name"
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="autor name"
                type="text"
                onChange={(e) => setAutor(e.target.value)}
            />
            <input
                placeholder="price"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                placeholder="disc"
                type="text"
                onChange={(e) => setDisc(e.target.value)}
            />
            <input
                placeholder="img"
                type="text"
                onChange={(e) => setImg(e.target.value)}
            />
            <button onClick={handleData}>add</button>
        </div>
    );
};

export default Admin;
