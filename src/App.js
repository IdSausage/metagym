import React from "react";
import AnimateRoutes from "./pages/AnimateRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
          <AnimateRoutes />
        </BrowserRouter>
  );
}

export default App;
