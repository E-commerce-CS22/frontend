import React, { FC } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface ChatLoaderInterface extends IContentLoaderProps {
  width?: number;
  height?: number;
  rows?: number;
}
const ChatLoader: FC<ChatLoaderInterface> = ({ width, height, rows, ...props }) => {
  const rowHeight = "20";
  const rectWidth = (width / 2) | 0;
  const circleRad = "25";

  return (
    <ContentLoader viewBox={`0 0 ${width} ${height}`} height={height} width={width} backgroundColor='#fff' speed={2} {...props}>
      {new Array(rows).fill(0).map((_, index) => {
        const dir = index % 3 == 0;
        return (
          <React.Fragment key={index}>
            <circle cx={dir ? `${width - 30 * 2}` : "30"} cy={`${30 + index * 30 * 2}`} r={circleRad} />
            <rect x={dir ? `${width - rectWidth - 90}` : "65"} y={5 + index * 30 * 2} rx='5' ry='10' width={rectWidth} height={rowHeight} />
            <rect
              x={dir ? `${width - rectWidth - 90}` : "65"}
              y={30 + index * 30 * 2}
              rx='5'
              ry='10'
              width={rectWidth}
              height={rowHeight}
            />
          </React.Fragment>
        );
      })}
    </ContentLoader>
  );
};

export default ChatLoader;

ChatLoader.defaultProps = {
  width: 400,
  height: 300,
  rows: 4,
};
