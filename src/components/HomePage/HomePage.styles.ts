import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px 12px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
  }
`;

export const HeroSection = styled.section`
  text-align: center;
  padding: 60px 20px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  margin-bottom: 40px;
  color: white;

  @media (max-width: 768px) {
    padding: 40px 16px 30px;
    border-radius: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px 20px;
    border-radius: 12px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 16px;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.6;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;


export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 30px;
  }
`;

export const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 20px 14px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const FeatureDescription = styled.div`
  font-size: 15px;
  color: #444;
  line-height: 1.7;

  strong {
    color: #667eea;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
