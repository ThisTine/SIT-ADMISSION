import { Box, Container, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Link, RouterProvider } from "react-router-dom";
import RegisterContextProvider from "./context/RegisterDataContext";
import router from "./pages/router";

function App() {
  return (
    <>
      <RegisterContextProvider>
        <RouterProvider router={router} />
      </RegisterContextProvider>
    </>
  );
}

export default App;
