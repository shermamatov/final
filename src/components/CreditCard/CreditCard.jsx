import { Box } from "@mui/material";
import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";
export default class PaymentForm extends React.Component {
    state = {
        cvc: "",
        expiry: "",
        focus: "",
        name: "",
        number: "",
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    };

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <Box
                    sx={{
                        width: "300px",
                        // backgroundColor: " gray",
                        margin: "auto",
                        marginTop: "20px",
                    }}
                >
                    <form style={{ display: "flex", flexDirection: "column" }}>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            maxLength="16"
                            style={{
                                height: "40px",
                                marginBottom: "10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                paddingLeft: "10px",
                            }}
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            style={{
                                height: "40px",
                                marginBottom: "10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                paddingLeft: "10px",
                            }}
                        />
                        <input
                            type="date"
                            name="expiry"
                            // placeholder="Card "
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            style={{
                                height: "40px",
                                marginBottom: "10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                paddingLeft: "10px",
                            }}
                        />
                        <input
                            type="tel"
                            name="cvc"
                            placeholder="cvc"
                            maxLength="4"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            style={{
                                height: "40px",
                                marginBottom: "10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                paddingLeft: "10px",
                            }}
                        />
                        <Link to="/trans">
                            <button
                                style={{
                                    height: "40px",
                                    marginBottom: "10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#037fe0",
                                    paddingLeft: "10px",
                                    color: "white",
                                    width: "100%",
                                }}
                            >
                                submit
                            </button>
                        </Link>
                    </form>
                </Box>
            </div>
        );
    }
}
