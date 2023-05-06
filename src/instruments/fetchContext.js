import { createContext, useContext } from 'react';

export const FetchContext = createContext();

export const useFetch = () => useContext(FetchContext);