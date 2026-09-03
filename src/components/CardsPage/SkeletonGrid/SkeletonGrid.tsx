import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { SkeletonCard } from "../CardsPage.styles";

interface SkeletonGridProps {
  count?: number;
}

export const SkeletonGrid: React.FC<SkeletonGridProps> = ({ count = 20 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`}>
          <Skeleton
            variant="circular"
            width={80}
            height={80}
            sx={{ margin: "0 auto", mb: 2 }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={24}
            sx={{ margin: "0 auto", mb: 1 }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={20}
            sx={{ margin: "0 auto" }}
          />
        </SkeletonCard>
      ))}
    </>
  );
};