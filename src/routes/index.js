import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../view/pages/home';
import LogIn from '../view/pages/logIn';

export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<LogIn />} />
        </Routes>
    );
}
