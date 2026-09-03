import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CardsPage } from "../CardsPage/CardsPage";
import { HomePage } from "../HomePage/HomePage";
import {
  MainContainer,
  Navbar,
  NavLinkStyled,
  NavLinks,
  ContentWrapper,
} from "./MainPage.styles";

const NavLinksComponent: React.FC = () => {
  const location = useLocation();

  return (
    <NavLinks>
      <NavLinkStyled to="/" $active={location.pathname === "/"}>
        Главная
      </NavLinkStyled>
      <NavLinkStyled to="/cards" $active={location.pathname === "/cards"}>
        Покедекс
      </NavLinkStyled>
    </NavLinks>
  );
};

export const MainPage: React.FC = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Navbar>
          <NavLinksComponent />
        </Navbar>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cards" element={<CardsPage />} />
          </Routes>
        </ContentWrapper>
      </MainContainer>
    </BrowserRouter>
  );
};