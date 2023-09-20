import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from "./views/HomeView";
import "./assets/scss/style.scss"

// 배포 방법 : npm run deploy
const App = () => {

    return (
    <div className="app__banner app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </BrowserRouter>
    </div>
    );
};

export default App;