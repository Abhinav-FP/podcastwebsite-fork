import React from "react";
import Header from "../pages/common/Header";
import Footer from "../pages/common/Footer";

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}