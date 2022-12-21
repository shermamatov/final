import { Box, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/CartContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const CartCard = ({ item }) => {
    const { deleteInCart, changeCount, getCart } = useContext(cartContext);
    useEffect(() => {
        getCart();
    }, []);
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    fontFamily: "sans-serif",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            width: { md: "100px", xs: "70px" },
                            marginRight: "20px",
                        }}
                    >
                        <img
                            style={{ width: "100%" }}
                            src={item.book.img}
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{ fontSize: { md: "24px", xs: "18px" } }}
                            >
                                {item.book.name}
                            </Typography>
                            <Typography
                                sx={{ fontSize: { md: "20px", xs: "16px" } }}
                                variant="h6"
                            >
                                {item.book.autor}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{ fontSize: { md: "20px", xs: "16px" } }}
                                variant="h6"
                            >
                                ${item.book.price}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "end" }}>
                    <input
                        type="number"
                        style={{
                            width: "60px",
                            height: "30px",
                            fontSize: "16px",
                        }}
                        min={0}
                        value={item.count}
                        onChange={(e) =>
                            changeCount(e.target.value, item.book.id)
                        }
                    />

                    <IconButton
                        onClick={(e) => {
                            deleteInCart(item.book.id);
                            e.stopPropagation();
                        }}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default CartCard;
