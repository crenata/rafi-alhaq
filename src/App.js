import React, {PureComponent} from "react";
import AppRoutes from "./AppRoutes";
import "./App.css";
import "./css/Fonts.css";
import "./css/Footer.css";
import "./css/Navbar.css";
import "./css/Responsive.css";

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppRoutes />
        );
    }
}

export default App;
