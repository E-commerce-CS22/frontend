import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { SkeletonProps } from "./types";

export const Skeleton: FC<SkeletonProps> = ({ width, height }) => {
  return (
    <ContentLoader height={height || "100%"} width={width || "100%"} speed={2}>
      <rect x='0' y='5' rx='6' ry='6' width='100%' height='100%' />
    </ContentLoader>
  );
};

export default Skeleton;
