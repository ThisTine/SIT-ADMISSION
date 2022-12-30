import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import router from "./pages/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
