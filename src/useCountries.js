import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';


function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  
  

  useEffect (() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);

    };
    fetchData();
  }, 
  []);
}

function filterCountries() {
  return countries.filter((country) => {
    return (
      country.name.includes(query) && (country.continent === continent || continent === 'All')
    );
  });
}

<div className="countries">
  <h1>Countries of the World</h1>
</div>