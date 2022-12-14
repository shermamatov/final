import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookContext } from "../../contexts/BookContext";
// import "./Edit.css";
const Edit = () => {
    const [name, setName] = useState("");
    const [autor, setAutor] = useState("");
    const [price, setPrice] = useState(0);
    const [disc, setDisc] = useState("");
    const [img, setImg] = useState("");
    const { editData, oneData } = useContext(bookContext);
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (oneData) {
            setName(oneData.name);
            setAutor(oneData.autor);
            setPrice(oneData.price);
            setDisc(oneData.disc);
            setImg(oneData.img);
        }
    }, [oneData]);
    function handleData() {
        let obj = { name, autor, price, disc, img };
        console.log(id, obj);
        editData(id, obj);
    }
    return (
        <div>
            <input
                placeholder="book name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <input
                placeholder="autor name"
                onChange={(e) => setAutor(e.target.value)}
                value={autor}
                type="text"
            />
            <input
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
            />
            <input
                placeholder="disc"
                onChange={(e) => setDisc(e.target.value)}
                value={disc}
                type="text"
            />
            <input
                placeholder="img"
                onChange={(e) => setImg(e.target.value)}
                value={img}
                type="text"
            />
            <button
                onClick={() => {
                    handleData();
                    navigate("/products");
                }}
            >
                add
            </button>
        </div>
    );
};

export default Edit;
