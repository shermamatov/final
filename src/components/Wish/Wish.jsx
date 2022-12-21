import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { wishContext } from "../../contexts/WishContext";
import WishCard from "./WishCard";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { bookContext } from "../../contexts/BookContext";

const Wish = () => {
    const { getWish } = useContext(wishContext);
    let wish = JSON.parse(localStorage.getItem("wish"));
    if (!wish) {
        wish = [];
    }
    useEffect(() => {
        getWish();
    }, []);
    const navigate = useNavigate();
    const cleaner = () => {
        localStorage.removeItem("wish");
        getWish();
    };
    return (
        <div>
            {wish.length != 0 ? (
                <Box>
                    <Box
                        sx={{
                            width: { md: "80%", xs: "95%" },
                            margin: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{}} variant="h4">
                            избранное
                        </Typography>
                        <button
                            style={{
                                width: "70px",
                                border: "none",
                                backgroundColor: "red",
                                color: "white",
                                height: "30px",
                            }}
                            onClick={() => cleaner()}
                        >
                            очистить
                        </button>
                    </Box>

                    <Box
                        sx={{
                            width: { md: "80%", xs: "95%" },
                            margin: "auto",
                            display: "grid",
                            gridTemplateColumns: {
                                lg: "auto auto auto auto",
                                sm: "auto auto auto",
                                xs: "auto ",
                            },
                            // flexWrap: "wrap",
                            justifyContent: {
                                sm: "space-between",
                                xs: "center",
                            },
                        }}
                    >
                        {wish &&
                            wish.map((item) => (
                                <Box key={item.id} sx={{ width: "200px" }}>
                                    <WishCard item={item} />
                                </Box>
                            ))}
                    </Box>
                </Box>
            ) : (
                <Box sx={{ width: "100vw", height: "60vh" }}>
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
                        <StarOutlineOutlinedIcon
                            sx={{
                                fontSize: "100px",
                                color: "#0089ff",
                                marginBottom: "20px",
                            }}
                        />
                        <Typography variant="h5">
                            здесь пока нечего нету
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
                            onClick={() => navigate("/products")}
                        >
                            домой
                        </button>
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default Wish;
