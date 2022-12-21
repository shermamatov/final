import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Navbar.css";

const DownNavbar = () => {
    const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();
    const ADMIN = "admin@gmail.com";
    return (
        <Box
            sx={{
                width: "100%",
                // backgroundColor: "bisque",
                height: { md: "40px", xs: "30px" },
                marginTop: "10px",
                borderBottom: "1px solid #E3E3E3",
                marginBottom: "30px",
            }}
        >
            <Box
                sx={{
                    width: { md: "80%", xs: "95%" },
                    height: "100%",
                    margin: "auto",
                }}
            >
                <Box
                    sx={{
                        width: {
                            lg: "70%",
                            sm: "90%",
                        },
                        display: "flex",
                        overflow: "auto",
                        // justifyContent: "space-between",
                    }}
                    className="scrollBox"
                >
                    <button
                        style={{
                            // width: "10%",
                            height: "90%",
                            border: "none",
                            backgroundColor: "transparent",
                            fontFamily: "sans-serif",
                            fontWeight: "100",
                        }}
                        className="navButton"
                        onClick={() => navigate("/products")}
                    >
                        книги
                    </button>
                    {email === ADMIN && (
                        <button
                            style={{
                                // width: "7%",
                                height: "90%",
                                border: "none",
                                backgroundColor: "transparent",
                                fontWeight: "light",
                                marginLeft: "50px",
                            }}
                            className="navButton"
                            onClick={() => navigate("/admin")}
                        >
                            добавить
                        </button>
                    )}

                    <button
                        style={{
                            // width: "7%",
                            height: "90%",
                            border: "none",
                            backgroundColor: "transparent",
                            fontWeight: "light",
                            marginLeft: "50px",
                        }}
                        className="navButton"
                        onClick={() => {
                            email ? navigate("/wish") : navigate("/auth");
                        }}
                    >
                        избранное
                    </button>
                    <button
                        style={{
                            // width: "7%",
                            height: "90%",
                            border: "none",
                            backgroundColor: "transparent",
                            fontWeight: "light",
                            marginLeft: "50px",
                        }}
                        className="navButton"
                        onClick={() => navigate("/cart")}
                    >
                        корзина
                    </button>
                    <button
                        style={{
                            // width: "7%",
                            height: "90%",
                            border: "none",
                            backgroundColor: "transparent",
                            fontWeight: "light",
                            marginLeft: "50px",
                        }}
                        className="navButton"
                    >
                        комьюнити
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default DownNavbar;
