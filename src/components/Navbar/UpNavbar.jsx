import React, { useContext, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Person4Icon from "@mui/icons-material/Person4";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";
import { useAuth } from "../../contexts/AuthContextProvider";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    ListItemIcon,
    Menu,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { bookContext } from "../../contexts/BookContext";
import "./Navbar.css";
const UpNavbar = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [search, setSearch] = useState();
    const { searchData } = useContext(bookContext);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    return (
        <Box sx={{ padding: "1% 0", width: "100%" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    alignItems: "center",
                    height: "50px",
                }}
            >
                <Typography
                    onClick={() => navigate("/")}
                    sx={{ fontSize: "38px" }}
                >
                    ouo
                </Typography>
                <Box
                    sx={{
                        width: "50%",
                        display: { md: "flex", xs: "none" },
                        height: "90%",
                        marginRight: { lg: "-200px" },
                    }}
                >
                    <input
                        type="text"
                        style={{
                            width: "80%",
                            height: "90%",
                            border: "1px solid #E3E3E3",
                            paddingLeft: "10px",
                        }}
                        placeholder="найти книгу"
                        className="inputSearch"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={() => navigate("/products")}
                    />
                    <button
                        onClick={() => setSearch("")}
                        style={{
                            marginLeft: "-40px",
                            background: "transparent",
                            width: "40px",
                            height: "90%",
                            border: "none",
                            fontSize: "20px",
                            color: "gray",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CloseIcon />
                    </button>
                    <button
                        style={{
                            backgroundColor: "red",
                            // marginLeft: "-10px",
                            // borderRadius: "none",
                            width: "40px",
                            height: "90%",
                            border: "none",
                            fontSize: "20px",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onClick={() => searchData(search)}
                    >
                        <SearchIcon />
                    </button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: { lg: "25%", md: "30%", sm: "25%", xs: "35%" },
                        height: "100%",
                        // backgroundColor: "coral",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        onClick={() => {
                            email ? navigate("/wish") : navigate("/auth");
                        }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <BookmarkIcon
                            sx={{ fontSize: { md: "25px", xs: "30px" } }}
                        />
                        <Typography
                            sx={{ display: { md: "flex", xs: "none" } }}
                        >
                            избранное
                        </Typography>
                    </Box>

                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        sx={{
                            color: "black",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Person4Icon sx={{ fontSize: "25px" }} />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    display: {
                                        md: "flex",
                                        xs: "none",
                                    },
                                    listStyleType: "none",
                                }}
                            >
                                кабинет
                            </Typography>
                        </Box>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        {email ? (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    handleLogout();
                                }}
                            >
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        ) : (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    handleLogout();
                                    navigate("/auth");
                                }}
                            >
                                <ListItemIcon>
                                    <LoginIcon fontSize="small" />
                                </ListItemIcon>
                                login
                            </MenuItem>
                        )}
                    </Menu>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                        onClick={() => navigate("/cart")}
                    >
                        <ShoppingBasketIcon sx={{ fontSize: "25px" }} />
                        <Typography
                            sx={{ display: { md: "flex", xs: "none" } }}
                        >
                            корзина
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: { md: "80%", xs: "95%" },
                    margin: "auto",
                    marginTop: "10px",
                    display: { md: "none", xs: "flex" },
                    alignItems: "center",
                }}
            >
                <input
                    type="text"
                    value={search}
                    style={{ width: "90%", height: "35px" }}
                    placeholder="найти книгу"
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => navigate("/products")}
                />
                <button
                    style={{
                        marginLeft: "-40px",
                        background: "transparent",
                        width: "40px",
                        height: "90%",
                        border: "none",
                        fontSize: "20px",
                        color: "gray",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => setSearch("")}
                >
                    <CloseIcon />
                </button>
                <button
                    style={{
                        backgroundColor: "red",
                        width: "40px",
                        height: "35px",
                        border: "none",
                        fontSize: "20px",
                        color: "white",
                    }}
                    onClick={() => searchData(search)}
                >
                    <SearchIcon />
                </button>
            </Box>
        </Box>
    );
};

export default UpNavbar;
