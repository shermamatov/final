import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import "./Auth.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
// import { useAuth } from "../../Contexts/AuthContextProvider";

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="white" align="center" {...props}>
//             {"Copyright © "}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{" "}
//             {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     );
// }

const theme = createTheme();

export default function Register() {
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

    const test = () => {
        console.log(email);
        console.log(hasAccount);
        console.log(user);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    className="box"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Avatar
                        className="avatar"
                        sx={{
                            m: 1,
                            bgcolor: "secondary.main",
                            backgroundColor: "white",
                        }}
                    >
                        <LockOutlinedIcon sx={{ color: "black" }} />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "30px",
                        }}
                    >
                        <strong>регистрация</strong>
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 1,
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                    >
                        <input
                            className="input-email"
                            required
                            id="email"
                            name="email"
                            autoComplete="email"
                            placeholder="email"
                            helpertext={emailError}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            className="input-password"
                            required
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            placeholder="password"
                            helpertext={passwordError}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            sx={{
                                borderRadius: "6px",
                                color: "white",
                                backgroundColor: "white",
                            }}
                        />

                        <Button
                            className="button_register"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, fontWeight: 600 }}
                            onClick={() => {
                                handleSignup();
                                navigate("/");
                            }}
                        >
                            register
                        </Button>
                        {/* <Grid
                            container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Grid item>
                                {hasAccount ? (
                                    <Link
                                        className="links"
                                        sx={{ color: "white" }}
                                        href="#"
                                        variant="body2"
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        {"Don't have an account? Register now"}
                                    </Link>
                                ) : (
                                    <Link
                                        className="links"
                                        sx={{ color: "white" }}
                                        href="#"
                                        variant="body2"
                                        onClick={() =>
                                            setHasAccount(!hasAccount)
                                        }
                                    >
                                        {"Already have an account? Log In"}
                                    </Link>
                                )}
                            </Grid>
                        </Grid> */}
                    </Box>
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}
                        id="line"
                    ></Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
