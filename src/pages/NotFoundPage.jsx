import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div>
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
                    <BlockOutlinedIcon
                        sx={{
                            fontSize: "100px",
                            color: "red",
                            marginBottom: "20px",
                        }}
                    />
                    <Typography variant="h5">
                        такой страницы не существует
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
        </div>
    );
};

export default NotFoundPage;
