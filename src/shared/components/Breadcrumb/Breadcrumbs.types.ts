export interface BreadcrumbsProps {
  data: BreadcrumbsItemType[];
}
export interface BreadcrumbsItemType {
  id?: string;
  name?: string;
  onClick?: (name: string) => void;
  route?: string;
  fullPath?: string;
}
