import { async } from "@firebase/util";
import { Box, createTheme } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { bookContext } from "../../../contexts/BookContext";
import { db } from "../../../fire";
import ProductRecomCard from "./ProductRecomCard";

const ProductRecomend = () => {
    const { recom } = useContext(bookContext);
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                tm: 800,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });
    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    width: { md: "80%", xs: "95%" },
                    overflow: "auto",
                    margin: "auto",
                }}
                className="scrollBox"
            >
                {recom &&
                    recom.map((item) => (
                        <Box key={item.id}>
                            <ProductRecomCard key={item.id} item={item} />
                        </Box>
                    ))}
            </Box>
        </div>
    );
};

export default ProductRecomend;
