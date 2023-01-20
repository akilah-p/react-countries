import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { loading, countries };
}





export default useCountries;