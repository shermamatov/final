import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Person4Icon from "@mui/icons-material/Person4";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
const UpNavbar = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ padding: "1% 0", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    alignItems: "center",
                    height: "50px",
                }}
            >
                <Typography sx={{ fontSize: "40px" }}>logo</Typography>
                <Box
                    sx={{
                        width: "40%",
                        display: { md: "flex", xs: "none" },
                        height: "90%",
                        marginRight: { lg: "-200px" },
                    }}
                >
                    <input
                        type="text"
                        style={{ width: "100%", height: "90%" }}
                        placeholder="найти книгу"
                    />
                    <button
                        style={{
                            backgroundColor: "transparent",
                            // position: "absolute",
                            marginLeft: "-6%",
                            borderRadius: "none",
                            width: "5%",
                            height: "100%",
                            border: "none",
                            color: "gray",
                            fontSize: "20px",
                        }}
                    >
                        x
                    </button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: { lg: "25%", md: "30%", sm: "25%", xs: "35%" },
                        height: "100%",
                        // backgroundColor: "coral",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <BookmarkIcon
                            sx={{ fontSize: { md: "25px", xs: "30px" } }}
                        />
                        <Typography
                            sx={{ display: { md: "flex", xs: "none" } }}
                        >
                            избранное
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        onClick={() => navigate("/auth")}
                    >
                        <Person4Icon sx={{ fontSize: "25px" }} />
                        <Typography
                            sx={{ display: { md: "flex", xs: "none" } }}
                        >
                            кабинет
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <ShoppingBasketIcon sx={{ fontSize: "25px" }} />
                        <Typography
                            sx={{ display: { md: "flex", xs: "none" } }}
                        >
                            корзина
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    marginTop: "10px",
                    display: { md: "none", sx: "flex" },
                }}
            >
                <input
                    type="text"
                    style={{ width: "100%", height: "35px", margin: "auto" }}
                    placeholder="найти книгу"
                />
                <button
                    style={{
                        backgroundColor: "transparent",
                        // position: "absolute",
                        marginLeft: "-6%",
                        borderRadius: "none",
                        width: "5%",
                        height: "100%",
                        border: "none",
                        color: "gray",
                        fontSize: "20px",
                    }}
                >
                    x
                </button>
            </Box>
        </Box>
    );
};

export default UpNavbar;
