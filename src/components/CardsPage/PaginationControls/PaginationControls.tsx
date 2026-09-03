import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationWrapper} from "../CardsPage.styles";

interface PaginationControlsProps {
  totalCount: number;
  totalPages: number;
  currentPage: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <>

      <PaginationWrapper>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </PaginationWrapper>
    </>
  );
};