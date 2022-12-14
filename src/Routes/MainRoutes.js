import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductPage from "../pages/ProductPage";

const MainRoutes = () => {
    const ROUTES = [
        { id: 1, link: "/", element: <HomePage /> },
        { id: 2, link: "/admin", element: <AdminPage /> },
        { id: 3, link: "/products", element: <ProductPage /> },
        { id: 4, link: "/product/:id", element: <ProductDetailsPage /> },
        { id: 5, link: "*", element: <h1>NOT FOUND</h1> },
        { id: 6, link: "/edit/:id", element: <EditPage /> },
        { id: 7, link: "/auth", element: <AuthPage /> },
    ];
    return (
        <Routes>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    path={route.link}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default MainRoutes;
