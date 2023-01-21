import React, {PureComponent} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RouteElement from "./helpers/RouteElement";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

class AppRoutes extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RouteElement component={Home} />} />
                    <Route path="*" element={<RouteElement component={NotFound} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default AppRoutes;