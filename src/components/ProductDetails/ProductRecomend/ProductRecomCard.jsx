import { Box, Button, createTheme, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bookContext } from "../../../contexts/BookContext";
import { cartContext } from "../../../contexts/CartContext";
import { wishContext } from "../../../contexts/WishContext";
import sorry from "../../../img/oc2.jpg";
const ProductRecomCard = ({ item }) => {
    const { addToCart } = useContext(cartContext);
    const { addToWish } = useContext(wishContext);
    const navigate = useNavigate();
    return (
        <div>
            <Box
                onClick={() => navigate(`/product/${item.id}`)}
                sx={{
                    // border: "1px solid #E3E3E3",
                    // marginRight: "20px",
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "space-between",
                    // height: { lg: "400px", md: "350px" },
                    // padding: { sm: "1.25rem", xs: "0.7rem" },
                    // width: "100%",
                    // marginBottom: "20px",
                    width: "250px",
                    height: "400px",
                    marginRight: "20px",
                    padding: "1.25rem",
                }}
            >
                <Box>
                    <Box sx={{ maxWidth: "70%", margin: "auto" }}>
                        <img
                            src={item.img ? item.img : sorry}
                            alt=""
                            style={{ width: "100%" }}
                        />
                    </Box>

                    <Typography
                        sx={{
                            fontSize: { md: "18px", sm: "17px" },
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography sx={{ color: "gray", fontSize: "14px" }}>
                        {item.autor}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                    }}
                >
                    <Typography>{item.price}$</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <button
                            // variant="contained"
                            style={{
                                width: "70%",
                                height: "30px",
                                border: "none",
                                background: "#037fe0",
                                color: "white",
                            }}
                            onClick={() => addToCart(item)}
                        >
                            купить
                        </button>
                        <button
                            onClick={() => addToWish(item)}
                            // variant="contained"
                            style={{
                                width: "25%",
                                height: "30px",
                                border: "none",
                            }}
                        >
                            wish
                        </button>
                    </Box>
                </Box>
            </Box>
            {/* <Box
                onClick={() => navigate(`/product/${item.id}`)}
                sx={{
                    width: "250px",
                    height: "400px",
                    border: "1px solid #E3E3E3",
                    marginRight: "20px",
                    padding: "1.25rem",
                }}
            >
                <Box sx={{ maxWidth: "80%", margin: "auto" }}>
                    <img src={item.img} alt="" style={{ width: "100%" }} />
                </Box>

                <Typography>{item.name}</Typography>
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
                    {item.autor}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "20px",
                    }}
                >
                    <Typography>{item.price}</Typography>
                    <Button
                        variant="contained"
                        sx={{ width: "100px", height: "30px" }}
                    >
                        buy
                    </Button>
                </Box>
            </Box> */}
        </div>
    );
};

export default ProductRecomCard;
