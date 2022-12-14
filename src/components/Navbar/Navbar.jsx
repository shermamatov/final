import React from "react";
import DownNavbar from "./DownNavbar";
import UpNavbar from "./UpNavbar";

const Navbar = () => {
    return (
        <div style={{ position: "sticky" }}>
            <UpNavbar />
            <DownNavbar />
        </div>
    );
};

export default Navbar;
