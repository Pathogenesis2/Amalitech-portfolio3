import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  continents: string[];
}

interface propsType {
  countries: User[] | any;
  setClickMonitor: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  toggleMode: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Countries: React.FC<propsType> = (props) => {
  const countries = props.countries;
  const toggleMode = props.toggleMode;
  const setClickMonitor = props.setClickMonitor;
  const setDisplay = props.setDisplay;
  const onclick = () => {
    window.scrollTo(0, 0);
    setClickMonitor(true);
  };

  return (
    <>
      <div
        id="countries"
        onClick={() => setDisplay((display) => (display = false))}
      >
        {countries.map((item: any) => {
          return (
            <div
              key={item.name.common}
              className={`card ${toggleMode ? "child-light " : "child-dark"}`}
              style={{ cursor: "pointer" }}
              onClick={onclick}
            >
              <Link
                to={`/CountryName/${item.name.common}`}
                key={item.name.common}
              >
                <img src={item.flags.png} alt="flag" className="flag" />
                <p className="cardItem countryName">{item.name.common}</p>
                <div className="description">
                  <div className="cardItem desc-item population">
                    <p className="bold">Population : &nbsp;</p>
                    {item.population.toLocaleString()}
                  </div>
                  <div className="cardItem desc-item region">
                    <p className="bold">Region : &nbsp;</p>
                    {item.region}
                  </div>
                  <div className="cardItem desc-item capital">
                    <p className="bold">Capital : &nbsp;</p>
                    {item.capital}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Countries;
