import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import directionLight from "./directionLight.svg";
import directionDark from "./directionDark.svg";

interface User {
  cca3: string;
  flags: {
    svg: string;
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

    /**
     * This function calls the API for a country that has been clicked by user
     */
    const getCountryByName = () => {
      axios
        .get(`https://restcountries.com/v3.1/name/${CountryInfo}`)
        .then((res) => setCountry(res.data.filter((item: { name: { common: any; }; })=>item.name.common===CountryInfo)))
        .catch((err) => console.log(err));
    };
    getCountryByName();
  }, [CountryInfo]);

  let nativeNamekeyList: any = "";
  const currencyKeyList: any = [];
  const languageKeyList: any = [];
  const borderList: any = [];

  /**
   * This function accepts two parameters which {element} and {arr}
   * const Obj stores the result of passing parameter {element} to {item} as a key of Item
   * {country[item]?.[element]?}.
   * Obj is iterated and the keys found in {Obj} are saved in [arr]
   * 
   * @param element - Holds any valid string that can be used as a key of {country[item]?} 
   * @param arr  - Corresponding array created outside the function to hold the result of the first code block
   */
  const ObjConverter = (element: string | number, arr: any[]) => {
    const Obj = country.map((item) => item[element as keyof typeof item]);
    Obj.forEach((item: {}) => arr.push(...Object.keys(item)));
  };

  /*
  *This function saves an array of objects when exists in {country[item]?.name.nativeName}
  *in nativeObj
  *nativeObject is being iterated through and the keys in native object are saved to {nativeNameKeyList}
  */

  const NativeName = () => {
    const nativeObj = country.map((item) => item.name.nativeName);
    nativeObj.forEach((item) => (nativeNamekeyList = Object.keys(item)));
  };
  NativeName();

  ObjConverter("currencies", currencyKeyList);
  ObjConverter("languages", languageKeyList);


  /*
  This function map through the borders of {country} and save
  them in an array {borderList}
  */

  const borderCountries = () => {
    country.forEach((item) => {
      try {
        return borderList.push(...item.borders);
      } catch (error) {
        borderList.push("none");
      }
    });
  };


  /*
  This function filters {countries} with {cca3} values that can be found in 
  borderList and save them in {filterCountry}
  */

  borderCountries();
  const filterCountry: User[] = countries.filter((item: { cca3: any }) =>
    borderList.includes(item.cca3)
  );

  return (
    <div className="data">
      <Link to="/">
        <div className="back-btn" onClick={()=>window.scrollTo(0,0)}>
          <img alt='back-btn'
            className="direction"
            src={toggleMode ? directionLight : directionDark}
          />
          <p>Back</p>
        </div>
      </Link>
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
                    {item.population.toLocaleString()}
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
                        <li key={item.name.common} className="borders" onClick={()=>window.scrollTo(0,0)}>{item.name.common}</li>&nbsp;
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
