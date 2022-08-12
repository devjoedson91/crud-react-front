import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import UserCrud from "./components/UserCrud";


export default function RouterApp() {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<UserCrud />} />
                <Route path="/register" element={<Form />} />
                <Route path="*" element={<Home />} />
            </Routes>

        </BrowserRouter>

    );

}