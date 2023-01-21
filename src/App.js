import React, {PureComponent} from "react";
import AppRoutes from "./AppRoutes";
import "./App.css";
import "./css/Fonts.css";

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
