import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { ISimpleLoader } from "./types";

const Loader: FC<ISimpleLoader> = ({ rows = 3, rowHeight = 20, ...props }) => {
  const { width = 400 } = props;
  return (
    <React.Fragment>
      <ContentLoader viewBox='0 0 500 160' height={160} width={400} speed={2} {...props}>
        {new Array(rows).fill(0).map((_, index) => (
          <rect key={index} x='8' y={`${0 + index * 50}`} rx='4' ry='4' width={width} height={rowHeight} />
        ))}
      </ContentLoader>
    </React.Fragment>
  );
};
export default Loader;
