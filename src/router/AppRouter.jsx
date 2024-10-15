import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../ui/components/Navbar";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
