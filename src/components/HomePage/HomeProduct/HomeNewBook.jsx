import { Box } from "@mui/system";
import React from "react";
import HomeCard from "./HomeCard";
import "./Home.css";
import { Typography } from "@mui/material";
const HomeNewBook = () => {
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
        <div>
            <Typography
                variant="h3"
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "50px auto 30px",
                }}
            >
                новинки
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
                    <HomeCard item={item} key={item.id} />
                ))}
            </Box>
        </div>
    );
};

export default HomeNewBook;
