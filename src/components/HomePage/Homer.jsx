import { Box, Slider } from "@mui/material";
import React from "react";
import HomeHitBook from "./HomeProduct/HomeHitBook";
import HomeNewBook from "./HomeProduct/HomeNewBook";
import HomeSoonBook from "./HomeProduct/HomeSoonBook";
import HomeSlider from "./Slider/HomeSlider";

const HomePage = () => {
    return (
        <div>
            <Box
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    marginTop: { md: "20px", xs: "10px" },
                    marginBottom: { md: "20px", xs: "10px" },
                }}
            >
                <img
                    style={{ width: "100%" }}
                    src="https://www.bookvoed.ru/files/7857/31/62.png"
                    alt=""
                />
            </Box>
            <HomeSlider />
            <HomeNewBook />
            <HomeHitBook />
            <HomeSoonBook />
        </div>
    );
};

export default HomePage;
