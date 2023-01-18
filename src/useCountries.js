import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';


function useCountries() {
  const [countries, setCountries] = useState([]);
  

  useEffect (() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, 
  []);
}

function filterCountries() {
  return countries.filter((country) => {
    return country.name.includes(query) && (country.continent === continent || continent 'All')
  
  });

}
