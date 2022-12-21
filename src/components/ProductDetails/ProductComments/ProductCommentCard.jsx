import { Avatar, Box, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React from "react";

const ProductCommentCard = ({ item }) => {
    return (
        <Box sx={{ display: "flex", marginBottom: "20px" }}>
            <Box>
                <Avatar>{item.name[0].toUpperCase()}</Avatar>
            </Box>
            <Box sx={{ fontFamily: "sans-serif", marginLeft: "10px" }}>
                <Typography>{item.name}</Typography>
                <Typography>{item.comment}</Typography>
            </Box>
        </Box>
    );
};

export default ProductCommentCard;
