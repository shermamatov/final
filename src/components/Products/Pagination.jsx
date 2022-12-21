import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const PaginationComp = ({ page, setPage, count }) => {
    const handleChange = (e, p) => {
        setPage(p);
    };

    return (
        <div>
            <Stack spacing={2}>
                <Pagination
                    page={page}
                    count={count}
                    onChange={handleChange}
                    color="primary"
                />
            </Stack>
        </div>
    );
};

export default PaginationComp;
