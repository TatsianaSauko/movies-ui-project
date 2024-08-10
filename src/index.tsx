import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./app";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./app/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
