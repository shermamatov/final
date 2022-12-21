import React, { useContext } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contexts/CartContext";
const TransPage = () => {
    const navigate = useNavigate();
    const { getCart } = useContext(cartContext);
    const cleaner = () => {
        localStorage.removeItem("cart");
        getCart();
    };
    return (
        <Box sx={{ width: "100vw", height: "70vh" }}>
            <Box
                sx={{
                    margin: "auto",
                    width: "500px",
                    height: "100%",
                    // backgroundColor: "gray",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "40px",
                }}
            >
                <CheckCircleOutlineIcon
                    sx={{
                        fontSize: "100px",
                        color: "green",
                        marginBottom: "20px",
                    }}
                />
                <Typography variant="h5">
                    транзакция успешно завершена
                </Typography>
                <button
                    style={{
                        width: "200px",
                        height: "30px",
                        marginTop: "20px",
                        border: "none",
                        backgroundColor: "green",
                        color: "white",
                    }}
                    onClick={() => {
                        navigate("/");
                        cleaner();
                    }}
                >
                    домой
                </button>
            </Box>
        </Box>
    );
};

export default TransPage;
