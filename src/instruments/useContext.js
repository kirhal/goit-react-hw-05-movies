import { createContext, useContext } from 'react';

export const FetchContext = createContext();

export const useContexFetch = () => useContext(FetchContext);