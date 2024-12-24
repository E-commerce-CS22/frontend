import { SidebarDataType } from "../Sidebar/Sidebar.types";
import RouteItem, { ParentRoute, RouteWithElement } from "./routeTypes";

export function routeWithSelectedItems(routes: RouteItem[]): SidebarDataType[] {
  return routes
    .map((route: RouteItem) => ({
      ...route,
      selected: location.pathname
        .split("/")
        .some((el) => el === (route as RouteWithElement)?.route),
      subItems: (route as ParentRoute).subItems
        ? routeWithSelectedItems((route as ParentRoute).subItems!)
        : undefined,
    }))
    .filter(Boolean);
}

export function getBreadCrumbLink(
  routes: (RouteWithElement | ParentRoute)[],
  path: string
) {
  let fullPath = "";

  routes?.forEach((item) => {
    if (item?.id?.toLowerCase() == path?.toLowerCase()) {
      fullPath = (item as RouteWithElement)?.fullPath || "";
    } else if ((item as ParentRoute)?.subItems?.length) {
      getBreadCrumbLink((item as ParentRoute).subItems!, path);
    }
  });
  return fullPath;
}
