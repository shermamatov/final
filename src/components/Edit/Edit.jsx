import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
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
    const [type, setType] = useState("");

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
            setType(oneData.type);
        }
    }, [oneData]);
    function handleData() {
        if (!name || !autor || !disc || !type) {
            alert("заполните все поля");
            return;
        }
        let obj = { name, autor, price, disc, img, type };
        editData(id, obj);
        navigate("/products");
    }
    return (
        <Box sx={{ width: "100vw", height: "70vh", textAlign: "center" }}>
            <Typography variant="h3" sx={{ marginBottom: "30px" }}>
                панель изменения
            </Typography>
            <Box
                sx={{
                    width: "50%",
                    margin: "auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridGap: "10px",
                }}
            >
                <input
                    placeholder="book name"
                    className="adminInp"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="adminInp"
                    placeholder="autor name"
                    value={autor}
                    type="text"
                    onChange={(e) => setAutor(e.target.value)}
                />

                <input
                    className="adminInp"
                    placeholder="document"
                    type="text"
                />
                <input
                    className="adminInp"
                    placeholder="img"
                    value={img}
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                />
                <textarea
                    className="adminArea"
                    style={{ gridColumn: "1/3" }}
                    placeholder="disc"
                    value={disc}
                    type="text"
                    onChange={(e) => setDisc(e.target.value)}
                />
                <input
                    value={price}
                    className="adminInp"
                    placeholder="price"
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormControl>
                    <Select
                        defaultValue={type}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        sx={{ width: "100%" }}
                        inputProps={{
                            name: "sort",
                        }}
                        size="small"
                    >
                        <MenuItem value={"All"}>все жанры</MenuItem>
                        <MenuItem value={"детектив"}>детектив</MenuItem>
                        <MenuItem value={"романтика"}>Любовный роман</MenuItem>
                        <MenuItem value={"приключения"}>Приключения</MenuItem>
                        <MenuItem value={"научная"}>научная</MenuItem>
                    </Select>
                </FormControl>

                <button
                    className="addBtn"
                    style={{ gridColumn: "1/3" }}
                    onClick={() => {
                        handleData();
                    }}
                >
                    изменить
                </button>
            </Box>
        </Box>
        // <div>
        //     <input
        //         placeholder="book name"
        //         type="text"
        //         onChange={(e) => setName(e.target.value)}
        //         value={name}
        //     />
        //     <input
        //         placeholder="autor name"
        //         onChange={(e) => setAutor(e.target.value)}
        //         value={autor}
        //         type="text"
        //     />
        //     <input
        //         placeholder="price"
        //         onChange={(e) => setPrice(e.target.value)}
        //         value={price}
        //         type="text"
        //     />
        //     <input
        //         placeholder="disc"
        //         onChange={(e) => setDisc(e.target.value)}
        //         value={disc}
        //         type="text"
        //     />
        //     <input
        //         placeholder="img"
        //         onChange={(e) => setImg(e.target.value)}
        //         value={img}
        //         type="text"
        //     />
        //     <button
        //         onClick={() => {
        //             handleData();
        //             navigate("/products");
        //         }}
        //     >
        //         add
        //     </button>
        // </div>
    );
};

export default Edit;
