import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './pages/home';
import PublicApp from "./pages/publicapp";
import Idea from './pages/ideas';
import Equip from './pages/equipaments';
import Project from './pages/projeto';
import Info from './pages/info';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publicapp" element={<PublicApp />} />
            <Route path='/ideas' element={<Idea />} />
            <Route path='/equipaments' element={<Equip />} />
            <Route path='/project' element={<Project />} />
            <Route path='/bibliografia' element={<Info />} />
        </Routes>
    );
}

export default Router