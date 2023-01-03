import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./config/theme";
import "@fontsource/inter";
import "@fontsource/prompt";
import UserContext from "./context/UserContext";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <ChakraProvider theme={theme}>
        <UserContext>
          <App />
        </UserContext>
      </ChakraProvider>
    </CookiesProvider>
  </React.StrictMode>
);
