import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface Country {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  continents: string[];
}

export interface GlobalContextType {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

export const GlobalContext = createContext<any>({countries:[],setCountries:()=>{}});

export const GlobalContextProvider: React.FC = ({ children }:any) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.log('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={countries}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
