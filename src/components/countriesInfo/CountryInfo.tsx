import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import directionLight from "./directionLight.svg";
import directionDark from "./directionDark.svg";

interface User {
  cca3: string;
  flags: {
    png: string;
  };
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  continents: string[];
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders: string[];
}

interface propsType {
  toggleMode: boolean;
  countries: any;
}
const GetCountryInfo: React.FC<propsType> = (props) => {
  const toggleMode = props.toggleMode;
  const countries = props.countries;
  const { CountryInfo } = useParams();
  const [country, setCountry] = useState<User[]>([]);
  useEffect(() => {
    const getCountryByName = () => {
      axios
        .get(`https://restcountries.com/v3.1/name/${CountryInfo}`)
        .then((res) => setCountry(res.data))
        .catch((err) => console.log(err));
    };
    getCountryByName();
  }, [CountryInfo]);

  let nativeNamekeyList: any = "";
  const currencyKeyList: any = [];
  const languageKeyList: any = [];
  const borderList: any = [];

  const ObjConverter = (element: string | number, arr: any[]) => {
    const Obj = country.map((item) => item[element as keyof typeof item]);
    Obj.forEach((item: {}) => arr.push(...Object.keys(item)));
  };

  const NativeName = () => {
    const nativeObj = country.map((item) => item.name.nativeName);
    nativeObj.forEach((item) => (nativeNamekeyList = Object.keys(item)));
  };
  NativeName();

  ObjConverter("currencies", currencyKeyList);
  ObjConverter("languages", languageKeyList);


  const borderCountries = () => {
    country.forEach((item) => {
      try {
        return borderList.push(...item.borders);
      } catch (error) {
        borderList.push("none");
      }
    });
  };

  borderCountries();
  const filterCountry: User[] = countries.filter((item: { cca3: any }) =>
    borderList.includes(item.cca3)
  );

  return (
    <div className="data">
      <div className="back-btn">
        <img alt='back-btn'
          className="direction"
          src={toggleMode ? directionLight : directionDark}
        />
        <Link to="/">
          <p>Back</p>
        </Link>
      </div>
      {country.map((item: any) => {
        return (
          <div className="data-card">
            <img src={item.flags.png} alt='country-flag' />
            <div className="info">
              <p className="name data-ele">{item.name.common}</p>
              <div className="name-data-cnt">
                <div className="left-data">
                  <div>
                    <span>Native Name:&nbsp;</span>
                    {item.name.nativeName[nativeNamekeyList]?.common}
                  </div>
                  <div>
                    <span>Population:&nbsp;</span>
                    {item.population}
                  </div>
                  <div>
                    <span>Region:&nbsp;</span>
                    {item.region}
                  </div>
                  <div>
                    <span>Sub Region:&nbsp;</span>
                    {item.subregion}
                  </div>
                  <div>
                    <span>Capital:&nbsp;</span>
                    {item.capital}
                  </div>
                </div>
                <div className="right-data">
                  <div>
                    <span>Top Level Domain:&nbsp;</span>
                    {item.tld[0]}
                  </div>
                  <div>
                    <span>Currencies:&nbsp;</span>
                    {currencyKeyList.map((element: string) => {
                      try {
                        return (
                          <>
                            <div style={{ display: "inline" }}>
                              {item.currencies[element]?.name} &nbsp; &nbsp;
                            </div>
                          </>
                        );
                      } catch (error) {
                        return (
                          <>
                            <div style={{ display: "inline" }}>None</div>
                          </>
                        );
                      }
                    })}
                  </div>
                  <div>
                    <span>Langauges:&nbsp;</span>
                    {languageKeyList.map((element: string, index: number) => {
                      if (index !== languageKeyList.length - 1) {
                        return (
                          <>
                            <div style={{ display: "inline" }}>
                              {item.languages[element]}, &nbsp;
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <>
                            <div style={{ display: "inline" }}>
                              {item.languages[element]}
                            </div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="border">
                <ul className="border-list">
                  <span>Border Countries:</span>
                  {filterCountry.map((item) => {
                    return (
                      <Link to={`/CountryName/${item.name.common}`}>
                        <li key={`${item.name.common}`} className="borders">{item.name.common}</li>&nbsp;
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default GetCountryInfo;
