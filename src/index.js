import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthPage } from "./pages/auth";
import { MainPage } from "./pages/main";
import { ShopPage } from "./pages/shop";
import { Container } from "./components/container";
import { ProtectedRoutes } from "./utils/protected-routes";
import { store } from "./redux/store";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Container>
          <Routes>
            <Route path="/login" element={<AuthPage />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/shop" element={<ShopPage />} />
            </Route>
            <Route path="/*" element={<p>Page not found</p>} />
          </Routes>
        </Container>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
