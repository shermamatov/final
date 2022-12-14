import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="row ">
                        <a href="#">
                            <FacebookIcon />
                        </a>
                        <a href="#">
                            <InstagramIcon />
                        </a>
                        <a href="#">
                            <YouTubeIcon />
                        </a>
                        <a href="#">
                            <TwitterIcon />
                        </a>
                    </div>

                    <div className="row">
                        <ul>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                            <li>
                                <a href="#">Our Services</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Career</a>
                            </li>
                        </ul>
                    </div>

                    <div className="row">
                        INFERNO Copyright © 2022 Inferno - All rights reserved
                        || Designed By: timur
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
