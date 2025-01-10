'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface CookieContextProps {
  token: string | null;
  setToken: (value: string) => void;
}

const cookieContext = createContext<CookieContextProps | null>(null);

export const CookieProvider = ({
  children,
  initialToken,
}: {
  children: ReactNode;
  initialToken: string | null;
}) => {
  const [token, setToken] = useState<string | null>(initialToken);

  return (
    <cookieContext.Provider value={{ token, setToken }}>
      {children}
    </cookieContext.Provider>
  );
};

export const useCookieContext = () => {
  const context = useContext(cookieContext);

  if (!context) {
    throw new Error('useCookieContext must be used within a CookieProvider');
  }

  return context;
};
