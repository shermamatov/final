import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    const {
        email,
        user,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
    } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    const navigate = useNavigate();
    return (
        <div>
            <Box
                sx={{
                    maxWidth: "400px",
                    margin: "auto",
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "20px",
                    }}
                >
                    <AccountCircleIcon sx={{ fontSize: "70px" }} />
                    <Typography variant="h4" sx={{ marginBottom: "50px" }}>
                        войти
                    </Typography>
                    <TextField
                        style={{
                            width: "100%",
                            marginBottom: "60px",
                            height: "40px",
                            paddingLeft: "10px",
                        }}
                        autoComplete="email"
                        placeholder="email"
                        name="email"
                        helperText={emailError}
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <TextField
                        style={{
                            width: "100%",
                            marginBottom: "60px",
                            paddingLeft: "10px",
                            height: "40px",
                        }}
                        name="password"
                        placeholder="password"
                        autoComplete="current-password"
                        value={password}
                        type="password"
                        helperText={passwordError}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        style={{
                            width: "100%",
                            height: "40px",
                            fontSize: "20px",
                            color: "white",
                            border: "none",
                            backgroundColor: "#4286f4",
                        }}
                        onClick={() => {
                            handleLogin();
                            navigate("/products");
                        }}
                    >
                        войти
                    </button>
                </Box>
            </Box>
        </div>
    );
};

export default Auth;
