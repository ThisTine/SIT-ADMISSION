import { Box, Container, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Link, RouterProvider } from "react-router-dom";
import router from "./pages/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
