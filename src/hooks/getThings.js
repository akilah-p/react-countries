import { useState, useEffect } from 'react';
import { getCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
        setLoading(false);
      } catch (e) {
        setError('Ay No! : ( Something went wrong');
      }
    };
    fetchData();
  }, []);
  return { loading, countries, error };
}





export default useCountries;