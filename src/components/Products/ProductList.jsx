import {
    Box,
    createTheme,
    FormControl,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { testArr } from "../../Consts";
import { bookContext } from "../../contexts/BookContext";
import PaginationComp from "./Pagination";
import ProductCard from "./ProductCard";

const Books = () => {
    const { getData, data, testData, testSort } = useContext(bookContext);
    useEffect(() => {
        getData();
    }, []);
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
    const count = Math.ceil(data.length / itemsPerPage);

    function currentData() {
        const begin = (page - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }
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
            <Box sx={{ width: { md: "80%", xs: "95%" }, margin: "auto" }}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "25% 75%",
                        gridGap: "10px",
                    }}
                >
                    <Box
                        sx={{
                            gridColumn: "1/3",
                            height: "70px",
                            // backgroundColor: "lightcoral",
                            margin: "20px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography variant="h4">Книги</Typography>
                        <Box
                            sx={{
                                width: "60%",
                                // background: "lightcoral",
                                display: "flex",
                                justifyContent: "end",
                            }}
                        >
                            <FormControl
                                sx={{
                                    width: "50%",
                                    display: { sm: "none", xs: "block" },
                                }}
                            >
                                <Select
                                    defaultValue={"All"}
                                    sx={{ width: "100%" }}
                                    inputProps={{
                                        name: "sort",
                                    }}
                                    size="small"
                                    onChange={(e) =>
                                        testData("type", e.target.value)
                                    }
                                >
                                    <MenuItem value={"All"}>все</MenuItem>
                                    <MenuItem value={"детектив"}>
                                        детектив
                                    </MenuItem>
                                    <MenuItem value={"приключения"}>
                                        приключения
                                    </MenuItem>
                                    <MenuItem value={"романтика"}>
                                        романтика
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl
                                sx={{
                                    width: "45%",
                                    margin: "0px 10px",
                                    border: "none",
                                }}
                            >
                                <Select
                                    defaultValue={"All"}
                                    sx={{
                                        "&.Mui-focused fieldset": {
                                            border: "none",
                                        },
                                        width: "100%",
                                    }}
                                    inputProps={{
                                        name: "sort",
                                    }}
                                    size="small"
                                    fullWidth
                                    onChange={(e) => testSort(e.target.value)}
                                >
                                    <MenuItem value={"All"}>
                                        сортировать
                                    </MenuItem>
                                    <MenuItem value={"asc"}>дешевле</MenuItem>
                                    <MenuItem value={"desc"}>дороже</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            gridColumn: "1/2",
                            display: { sm: "block", xs: "none" },
                        }}
                    >
                        <Typography variant="h5">категории</Typography>
                        <Box
                            sx={{
                                width: "80%",
                                marginTop: "20px",
                            }}
                        >
                            <Typography
                                onClick={() => testData("type", "All")}
                                variant="h6"
                                sx={{
                                    fontSize: "13.5px",
                                    color: "#037fe0",
                                    fontFamily: "sans-serif",
                                    borderBottom: "1px solid #E3E3E3",
                                    marginBottom: "15px",
                                    marginLeft: "10px",
                                }}
                            >
                                все
                            </Typography>
                            <Typography
                                variant="h6"
                                onClick={() => testData("type", "детектив")}
                                sx={{
                                    fontSize: "13.5px",
                                    color: "#037fe0",
                                    fontFamily: "sans-serif",
                                    marginLeft: "10px",
                                    marginBottom: "15px",
                                    borderBottom: "1px solid #E3E3E3",
                                }}
                            >
                                детектив
                            </Typography>
                            <Typography
                                onClick={() => testData("type", "приключения")}
                                variant="h6"
                                sx={{
                                    fontSize: "13.5px",
                                    color: "#037fe0",
                                    fontFamily: "sans-serif",
                                    borderBottom: "1px solid #E3E3E3",
                                    marginBottom: "15px",
                                    marginLeft: "10px",
                                }}
                            >
                                приключения
                            </Typography>
                            <Typography
                                onClick={() => testData("type", "романтика")}
                                variant="h6"
                                sx={{
                                    fontSize: "13.5px",
                                    color: "#037fe0",
                                    fontFamily: "sans-serif",
                                    borderBottom: "1px solid #E3E3E3",
                                    marginBottom: "15px",
                                    marginLeft: "10px",
                                }}
                            >
                                романтика
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            [theme.breakpoints.down("tm")]: {
                                justifyContent: "space-around",
                            },
                            flexWrap: "wrap",
                            gridColumn: { sm: "2/3", xs: "1/3" },
                            width: "100%",
                        }}
                        className="scrollBox"
                    >
                        {data &&
                            currentData().map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{
                                        width: "30%",
                                        [theme.breakpoints.down("tm")]: {
                                            width: "45%",
                                        },
                                    }}
                                >
                                    <ProductCard item={item} />
                                </Box>
                            ))}
                        {/* {data &&
                    data.map((item) => (
                        <ProductCard item={item} key={item.id} />
                    ))} */}
                    </Box>
                </Box>
                <PaginationComp page={page} setPage={setPage} count={count} />
            </Box>
        </div>
    );
};

export default Books;
