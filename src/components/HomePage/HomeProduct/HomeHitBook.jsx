import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomeCard from "./HomeCard";
const HomeHitBook = () => {
    const newBook = [
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://readrate.com/img/pictures/book/292/29286/29286/w160h240-stretch-5ed3128e.jpg",
            id: 1,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 2,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 3,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 4,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 5,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 6,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 7,
        },
        {
            title: "Болотная Тварь. Книга 2",
            autor: "Мур Алан",
            price: "1450",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEKYn1rfhBlmbmZ9OuuBXz6lrWFfYoA7UCA&usqp=CAU",
            id: 8,
        },
    ];
    return (
        <Box
            sx={{
                // width: "100vw",
                backgroundColor: "#3360A1",
                padding: "30px 0 60px",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    marginBottom: "20px",
                    color: "white",
                }}
            >
                хиты продаж
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    width: { md: "80%", xs: "95%" },
                    overflow: "auto",
                    margin: "auto",
                }}
                className="scrollBox"
            >
                {newBook.map((item) => (
                    <Box
                        key={item.id}
                        sx={{
                            backgroundColor: "#487AC0",
                            width: "250px",
                            marginRight: "20px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "250px",
                                height: "400px",
                                marginRight: "20px",
                                padding: "1.25rem",
                            }}
                        >
                            <Box sx={{ maxWidth: "80%", margin: "auto" }}>
                                <img
                                    src={item.img}
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </Box>

                            <Typography color="white">{item.title}</Typography>
                            <Typography
                                sx={{ color: "lightgray", fontSize: "14px" }}
                            >
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
                                <Typography color="white">
                                    ${item.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ width: "100px", height: "30px" }}
                                >
                                    buy
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HomeHitBook;
