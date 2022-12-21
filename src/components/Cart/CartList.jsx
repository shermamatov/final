import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/CartContext";
import CartCard from "./CartCard";

const CartList = () => {
    const { cartData, getCart } = useContext(cartContext);
    const navigate = useNavigate();
    const cleaner = () => {
        localStorage.removeItem("cart");
        getCart();
    };
    useEffect(() => {
        getCart();
    }, []);

    if (cartData)
        return (
            <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "auto" }}>
                {cartData.books[0] ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: { md: "row", xs: "column" },
                        }}
                    >
                        <Box sx={{ width: { md: "70%", xs: "100%" } }}>
                            {cartData &&
                                cartData.books.map((item) => (
                                    <CartCard key={item.book.id} item={item} />
                                ))}
                        </Box>

                        <Box
                            sx={{
                                width: { md: "27%", xs: "100%" },
                                // backgroundColor: "lightblue",
                                border: "1px solid #E3E3E3",
                                padding: "20px 20px",
                                display: "flex",
                                height: "333px",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginBottom: { md: "0px", xs: "30px" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "20px",
                                    }}
                                >
                                    {cartData.books.length} товара
                                </Typography>
                                <Typography sx={{ fontSize: "20px" }}>
                                    ${cartData.totalPrice}
                                </Typography>
                            </Box>
                            <Box>
                                <button
                                    style={{
                                        width: "100%",
                                        height: "40px",
                                        border: "none",
                                        backgroundColor: "#037fe0",
                                        color: "white",
                                    }}
                                    onClick={() => navigate("/credit")}
                                >
                                    перейти к оформлению
                                </button>
                                <button
                                    style={{
                                        width: "100%",
                                        height: "40px",
                                        border: "none",
                                        backgroundColor: "red",
                                        color: "white",
                                        marginTop: "10px",
                                    }}
                                    onClick={() => cleaner()}
                                >
                                    очистить корзину
                                </button>
                            </Box>
                        </Box>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            // backgroundColor: "gray",
                            height: "60vh",
                            textAlign: "center",
                            paddingTop: "30px",
                        }}
                    >
                        <Typography variant="h4">
                            Ваша корзина пуста.
                        </Typography>
                    </Box>
                )}
            </Box>
        );
};

export default CartList;
