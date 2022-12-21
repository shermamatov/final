import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContextProvider";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import CreditCardPage from "../pages/CreditCardPage";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductPage from "../pages/ProductPage";
import TransPage from "../pages/TransPage";
import WishPage from "../pages/WishPage";

const MainRoutes = () => {
    const { user } = useAuth();
    const ROUTES = [
        { id: 1, link: "/", element: <HomePage /> },
        { id: 3, link: "/products", element: <ProductPage /> },
        { id: 4, link: "/product/:id", element: <ProductDetailsPage /> },
        { id: 5, link: "*", element: <NotFoundPage /> },
        { id: 7, link: "/auth", element: <AuthPage /> },
        { id: 8, link: "/cart", element: <CartPage /> },
        { id: 9, link: "/wish", element: <WishPage /> },
        { id: 10, link: "/credit", element: <CreditCardPage /> },
        { id: 11, link: "/trans", element: <TransPage /> },
    ];
    const ADMIN_ROUTES = [
        { id: 2, link: "/admin", element: <AdminPage /> },
        { id: 6, link: "/edit/:id", element: <EditPage /> },
    ];
    const ADMIN = "admin@gmail.com";

    return (
        <Routes>
            {ROUTES.map((route) => (
                <Route
                    key={route.id}
                    path={route.link}
                    element={route.element}
                />
            ))}
            {user
                ? ADMIN_ROUTES.map((item) => (
                      <Route
                          key={item.id}
                          path={item.link}
                          element={
                              user.email === ADMIN ? (
                                  item.element
                              ) : (
                                  <Navigate replace to="*" />
                              )
                          }
                      />
                  ))
                : null}
        </Routes>
    );
};

export default MainRoutes;
