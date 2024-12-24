import { ReactNode } from "react";

export interface BaseRouteItem {
  id: string;
  icon?: ReactNode;
  text: string;
  selected?: boolean;
}

export interface RouteWithElement extends BaseRouteItem {
  route: string;
  fullPath?: string;
  element: ReactNode;
  onClick: (route: string) => void;
}

export interface HiddenRoute extends BaseRouteItem {
  hidden: true;
  element: ReactNode;
}

export interface AllowedRoutes extends BaseRouteItem {
  isProhibited: boolean;
}

export interface ParentRoute extends BaseRouteItem {
  subItems?: RouteItem[];
}

type RouteItem = BaseRouteItem | RouteWithElement | HiddenRoute | ParentRoute | AllowedRoutes;
// interface SidebarDataType extends RouteItem {
//   selected?: boolean;
// }
export default RouteItem;
