import styled from "@emotion/styled";

export const SearchHolder = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 0 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 0 8px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 16px;

  /* 4 колонки на планшетах и маленьких ноутбуках */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  /* 3 колонки на планшетах */
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    padding: 12px;
  }

  /* 2 колонки на телефонах */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 8px;
  }

  /* 1 колонка на очень маленьких телефонах */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 4px;
  }
`;

export const PokemonCardWrapper = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #f9f9f9;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    border-radius: 6px;
  }

  img {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto;

    @media (max-width: 992px) {
      width: 70px;
      height: 70px;
    }

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  p {
    margin: 8px 0;
    font-size: 14px;

    @media (max-width: 992px) {
      font-size: 13px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 4px 0;
    }

    @media (max-width: 480px) {
      font-size: 11px;
    }
  }

  .pokemon-name {
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  .pokemon-types {
    color: #666;

    @media (max-width: 768px) {
      font-size: 11px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const SkeletonCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #fafafa;

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    border-radius: 6px;
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px 8px;

    .MuiPagination-ul {
      flex-wrap: wrap;
      justify-content: center;
    }

    .MuiPaginationItem-root {
      min-width: 30px;
      height: 30px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px 4px;

    .MuiPaginationItem-root {
      min-width: 26px;
      height: 26px;
      font-size: 11px;
    }
  }
`;

export const PageWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 16px;
  }

  @media (max-width: 768px) {
    padding: 12px 8px;
  }

  @media (max-width: 480px) {
    padding: 8px 4px;
  }
`;

export const TotalCount = styled.div`
  text-align: center;
  color: #666;
  margin: 16px 0;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 12px 0;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin: 8px 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 18px;
  color: #666;

  @media (max-width: 768px) {
    min-height: 300px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    min-height: 200px;
    font-size: 14px;
  }
`;

export const ErrorWrapper = styled.div`
  text-align: center;
  padding: 60px 20px;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 16px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }

  .error-icon {
    font-size: 64px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 48px;
    }

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  .error-title {
    font-size: 24px;
    margin-bottom: 12px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  .error-message {
    color: #666;
    margin-bottom: 20px;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }
`;