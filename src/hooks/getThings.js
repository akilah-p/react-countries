import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}





export default useCountries;