import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/admin'} element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
