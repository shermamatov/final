import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { bookContext } from "../../../contexts/BookContext";
import ProductCommentCard from "./ProductCommentCard";

const ProductComment = () => {
    const { oneData, getOneData, deleteData, editData } =
        useContext(bookContext);
    const {
        user: { email },
    } = useAuth();
    const [commentState, setCommentState] = useState("");
    const { id } = useParams();
    useEffect(() => {
        getOneData(id);
    }, []);
    function handleComment() {
        let obj = {
            name: oneData.name,
            autor: oneData.autor,
            price: oneData.price,
            disc: oneData.disc,
            img: oneData.img,
            rating: oneData.rating,
            like: oneData.like,
            comments: [
                ...oneData.comments,
                { name: email, comment: commentState, commentId: Date.now() },
            ],
        };
        editData(id, obj);
        getOneData(id);
    }
    return (
        <Box
            sx={{
                width: { md: "80%", xs: "95%" },
                margin: "auto",
                borderTop: "1px solid gray",
                marginTop: "20px",
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: "30px", sm: "30px" },
                    marginBottom: "25px",
                }}
            >
                коментарии
            </Typography>
            {oneData.comments &&
                oneData.comments.map((item) => (
                    <ProductCommentCard key={item.commentId} item={item} />
                ))}
            {email && (
                <Box
                    sx={{
                        marginBottom: "100px",
                        // borderTop: "1px solid gray",
                    }}
                >
                    <textarea
                        value={commentState}
                        onChange={(e) => setCommentState(e.target.value)}
                        placeholder="comment"
                        style={{
                            width: "100%",
                            height: "100px",
                            border: "1px solid gray",
                            backgroundColor: "transparent",
                            padding: "10px",
                            marginTop: "10px",
                            fontSize: { xs: "16px", sm: "20px" },
                        }}
                    ></textarea>
                    <Button
                        onClick={() => {
                            handleComment();
                        }}
                        sx={{
                            width: "100%",
                            height: "40px",
                            backgroundColor: "green",
                            color: "white",
                            transition: "500s",
                        }}
                    >
                        add comment
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default ProductComment;
