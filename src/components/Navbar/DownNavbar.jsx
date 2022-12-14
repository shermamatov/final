import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const DownNavbar = () => {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                // backgroundColor: "bisque",
                height: { md: "40px", xs: "30px" },
                marginTop: "10px",
                borderBottom: "1px solid #E3E3E3",
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
                            lg: "50%",
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
                        книги
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
                        книги
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
                        книги
                    </button>
                </Box>
            </Box>
        </Box>
    );
};

export default DownNavbar;
