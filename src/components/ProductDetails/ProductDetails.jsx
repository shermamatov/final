import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bookContext } from "../../contexts/BookContext";

const ProductDetails = () => {
    const { oneData, getOneData, deleteData } = useContext(bookContext);
    const { id } = useParams();
    useEffect(() => {
        getOneData(id);
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <h1>timur</h1>
            <img src={oneData.img} alt="" />
            <h1>{oneData.name}</h1>
            <h1>{oneData.autor}</h1>
            <button onClick={() => navigate(`/edit/${id}`)}>edit</button>
            <button
                onClick={() => {
                    deleteData(id);
                    navigate("/products");
                }}
            >
                delete
            </button>
        </div>
    );
};

export default ProductDetails;
