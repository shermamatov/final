import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookContext } from "../../contexts/BookContext";
import "./Admin.css";
import sorry from "../../img/oc2.jpg";
const Admin = () => {
    const [name, setName] = useState("");
    const [autor, setAutor] = useState("");
    const [price, setPrice] = useState(0);
    const [disc, setDisc] = useState("");
    const [img, setImg] = useState(sorry);
    const [type, setType] = useState("");
    const { addData } = useContext(bookContext);
    const navigate = useNavigate();
    function handleData() {
        if (!name || !autor || !disc || !type) {
            alert("заполните все поля");
            return;
        }
        let obj = {
            name,
            autor,
            price: +price,
            disc,
            img,
            type,
            rating: [],
            like: [],
            comments: [],
        };
        addData(obj);
        navigate("/products");
    }
    return (
        <Box sx={{ width: "100vw", height: "70vh", textAlign: "center" }}>
            <Typography variant="h3" sx={{ marginBottom: "30px" }}>
                админ панель
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
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="adminInp"
                    placeholder="autor name"
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
                    type="text"
                    onChange={(e) => setImg(e.target.value)}
                />
                <textarea
                    className="adminArea"
                    style={{ gridColumn: "1/3" }}
                    placeholder="disc"
                    type="text"
                    onChange={(e) => setDisc(e.target.value)}
                />
                <input
                    className="adminInp"
                    placeholder="price"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <FormControl>
                    <Select
                        onChange={(e) => setType(e.target.value)}
                        defaultValue={"All"}
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
                    добавить
                </button>
            </Box>
        </Box>
    );
};

export default Admin;
