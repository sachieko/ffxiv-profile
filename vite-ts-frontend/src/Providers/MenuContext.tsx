import React, { createContext, useContext, useState } from 'react';

interface IMenuContext {
  mode: string;
}

const useMenu = (initial: IMenuContext) => useState<IMenuContext>(initial);
type useMenuType = ReturnType<typeof useMenu>;

const MenuContext = createContext<useMenuType | null>(null);

export const MenuCtx = () => useContext(MenuContext)!;

export const MenuProvider = ({ children }: { children: React.ReactNode }) => (
  <MenuContext.Provider value={useMenu({ mode: 'profile' })}>{children}</MenuContext.Provider>
);