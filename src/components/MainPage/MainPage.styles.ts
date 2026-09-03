import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  min-height: 100vh;
  background: #f0f2f5;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const NavLinkStyled = styled(Link, {
  shouldForwardProp: (prop) => prop !== "$active",
})<{ $active: boolean }>`
  padding: 8px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  background: ${(props) => (props.$active ? "#667eea" : "transparent")};
  color: ${(props) => (props.$active ? "white" : "#555")};

  &:hover {
    background: ${(props) => (props.$active ? "#667eea" : "#f0f0f0")};
  }

  @media (max-width: 768px) {
    padding: 6px 18px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px 14px;
    font-size: 13px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;