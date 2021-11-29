import { createContext, useContext, useState } from 'react';

interface ILoadingProps {
  loading: boolean;
  handleLoading: (status: boolean) => void;
}

const LoadingContext = createContext({} as ILoadingProps);

export function LoadingContextProvider({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [loading, setLoading] = useState(false);
  function handleLoading(status: boolean): void {
    console.log(status);
    setLoading(status);
  }

  return (
    <LoadingContext.Provider
      value={{
        loading,
        handleLoading
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext(): ILoadingProps {
  return useContext(LoadingContext);
}
