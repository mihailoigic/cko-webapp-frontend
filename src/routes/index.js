import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../view/pages/home';

export default function GetRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
