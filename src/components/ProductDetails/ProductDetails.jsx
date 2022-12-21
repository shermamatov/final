import { Box, Rating, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookContext, { bookContext } from "../../contexts/BookContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useAuth } from "../../contexts/AuthContextProvider";
import ProductComment from "./ProductComments/ProductComment";
import ProductRecomend from "./ProductRecomend/ProductRecomend";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { cartContext } from "../../contexts/CartContext";
import { wishContext } from "../../contexts/WishContext";
const ProductDetails = () => {
    const { oneData, getOneData, deleteData, editData, getRecom } =
        useContext(bookContext);
    const [rating, setRating] = useState(3);
    const {
        user: { email },
    } = useAuth();

    useEffect(() => {
        getOneData(id);
    }, []);

    const { addToCart } = useContext(cartContext);
    const { addToWish, getWish } = useContext(wishContext);

    const navigate = useNavigate();
    const { id } = useParams();
    function handleRating() {
        let obj = {
            name: oneData.name,
            autor: oneData.autor,
            price: oneData.price,
            disc: oneData.disc,
            img: oneData.img,
            rating: [...oneData.rating, +rating],
            like: oneData.like,
            comments: [...oneData.comments],
        };
        editData(id, obj);
    }
    function likeFunc() {
        const data = oneData;
        if (!data.like) {
            data.like = [];
        }
        if (data.like && data.like.includes(email)) {
            let likeIndex = data.like.findIndex((elem) => elem == email);
            data.like.splice(likeIndex, 1);
        } else {
            data.like && data.like.push(email);
        }
        handleRating();
        editData(id, data);
    }

    useEffect(() => {
        getWish();
    }, []);
    function prover(elemi) {
        let wish = JSON.parse(localStorage.getItem("wish"));
        if (!wish) {
            wish = [];
        }
        let somer = wish.some((elem) => elem.id == elemi);
        return somer;
    }
    function prover2(elemi) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (!cart) {
            cart = {
                books: [],
                totalPrice: 0,
            };
        }
        let somer = cart.books?.some((elem) => elem.book.id == elemi);
        return somer;
    }

    async function arif() {
        let ratings = await oneData.rating;
        let arifNum = ratings.reduce((a, b) => {
            return a + b / ratings.length;
        }, 0);
        setRating(Math.round(arifNum));
    }
    useEffect(() => {
        oneData.rating && arif();
    }, []);
    return (
        <Box>
            <Box
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    display: "flex",
                    flexDirection: { sm: "row", xs: "column" },
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        width: { sm: "25%", xs: "50%" },
                        margin: { sm: "0", xs: "auto" },
                    }}
                >
                    <img style={{ width: "100%" }} src={oneData.img} alt="" />
                </Box>
                <Box
                    sx={{
                        width: { sm: "50%", xs: "100%" },
                        padding: " 0px 20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        fontFamily: "sans-serif",
                        marginTop: { sm: "0", xs: "30px" },
                    }}
                >
                    <Box sx={{ marginBottom: { sm: "0", xs: "20px" } }}>
                        <Typography variant="h5">{oneData.name}</Typography>
                        <Typography sx={{ color: "#3C72C5" }}>
                            {oneData.autor}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            overflow: "auto",
                            height: { sm: "270px", xs: "auto" },
                            // fontSize: "18px",
                        }}
                        variant="p"
                    >
                        {oneData.disc}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        <Rating
                            sx={{ fontSize: "30px" }}
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                                handleRating();
                            }}
                        />
                        <Box sx={{ display: "flex" }}>
                            <ThumbUpOffAltIcon
                                sx={{
                                    fontSize: "30px",
                                    color: "#3C72C5",
                                    marginLeft: "10px",
                                }}
                                onClick={() => {
                                    likeFunc();
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: "23px",
                                    color: "#3C72C5",
                                }}
                            >
                                {oneData.like && oneData.like.length}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: { sm: "25%", xs: "100%" },
                        height: { md: "300px", sm: "260px" },
                        backgroundColor: "#EBF1F9",
                        padding: "15px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{ fontSize: { sm: "24px", xs: "28px" } }}
                        >
                            {oneData.price} ₽
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                margin: "30px 0",
                            }}
                        >
                            <button
                                style={{
                                    width: "75%",
                                    height: "35px",
                                    border: "none",
                                    background: "#037fe0",
                                    color: "white",
                                    fontSize: "16px",
                                }}
                                onClick={() => addToCart(oneData)}
                            >
                                {!prover2(oneData.id) ? "в корзину" : "отмена"}
                            </button>
                            <button
                                style={{
                                    width: "20%",
                                    height: "35px",
                                    border: "1px solid #E3E3E3",
                                    backgroundColor: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                onClick={() => addToWish(oneData)}
                            >
                                {!prover(oneData.id) ? (
                                    <BookmarkBorderIcon />
                                ) : (
                                    <BookmarkIcon />
                                )}
                            </button>
                        </Box>
                    </Box>
                    {email == "admin@gmail.com" && (
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <button
                                style={{
                                    backgroundColor: "green",
                                    border: "none",
                                    color: "white",
                                    fontSize: "16px",
                                    height: "35px",
                                }}
                                onClick={() => navigate(`/edit/${id}`)}
                            >
                                edit
                            </button>
                            <button
                                style={{
                                    backgroundColor: "#EB3246",
                                    border: "none",
                                    color: "white",
                                    height: "35px",
                                    fontSize: "16px",
                                    marginTop: "15px",
                                }}
                                onClick={() => {
                                    deleteData(id);
                                    navigate("/products");
                                }}
                            >
                                delete
                            </button>
                        </Box>
                    )}
                </Box>
            </Box>
            <ProductComment />
            <ProductRecomend />
        </Box>
    );
};

export default ProductDetails;
