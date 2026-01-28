"use client";

import * as React from "react";

const BannerContext = React.createContext<{
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}>({
  isVisible: true,
  setIsVisible: () => {},
});

export function BannerProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <BannerContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  return React.useContext(BannerContext);
}
