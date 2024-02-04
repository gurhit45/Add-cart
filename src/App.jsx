
import React from "react";
import Sidebar from './Sidebar'
import Product from './Product'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container } from "@mui/material";

function App() {
  return (
    <Container fixed>
      <Product />
      <Sidebar />
    </Container>
  )
}

export default App
