import { createContext } from "react";

export interface ContextItemsProps {
  id: string | undefined;
  setId?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const MenuItemContext = createContext<ContextItemsProps>({
  id: undefined,
  setId: () => {},
});
