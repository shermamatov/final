import { Box, Button, Typography } from "@mui/material";
import React from "react";

const HomeCard = ({ item }) => {
    return (
        <div>
            <Box
                sx={{
                    width: "250px",
                    height: "400px",
                    border: "1px solid #E3E3E3",
                    marginRight: "20px",
                    padding: "1.25rem",
                }}
            >
                <Box sx={{ maxWidth: "80%", margin: "auto" }}>
                    <img src={item.img} alt="" style={{ width: "100%" }} />
                </Box>

                <Typography>{item.title}</Typography>
                <Typography sx={{ color: "gray", fontSize: "14px" }}>
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
                    <Typography>{item.price}</Typography>
                    <Button
                        variant="contained"
                        sx={{ width: "100px", height: "30px" }}
                    >
                        buy
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default HomeCard;
