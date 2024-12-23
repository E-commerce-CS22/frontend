import { IContentLoaderProps } from "react-content-loader";

export interface TableRowLoaderProps {
  numberOfColumns: number;
}

export interface TableBodyLoaderProps {
  numberOfRows: number;
  numberOfColumns: number;
}

export interface SkeletonProps {
  width?: number;
  height?: number;
}

export interface ISimpleLoader extends IContentLoaderProps {
  rows?: number;
  rowHeight?: number;
}
