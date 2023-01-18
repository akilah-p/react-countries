import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';


function useCountries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [continent, setContinent] = useState('All');
  const [query, setQuery] = useState('');
  
  

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
  return (
      
      <div className="countries">
  <h1>Countries of the World</h1>
  <input placeholder="Search Countries"
    value={query}
    onChange={(e) => setQuery(e.target.value)} />
    <select value={continent} onChange={(e) => setContinent(e.target.value)}>
<option value="All">All</option>
<option value="Africa">Africa</option>
<option value="Antarctica">Antarctica</option>
<option value="Asia">Asia</option>
<option value="Europe">Europe</option>
<option value="North America">North America</option>
<option value="Oceania">Oceania</option>
<option value="South America">South America</option>
</select>
{filterCountries().map((country) => (
    <div key={country.id}>
        <img src= {`https://flagcdn.com/16x12/${country.iso2.toLowerCase()}.png`} alt={'Flag of' + country.name} />
        
))}
</div>
  );
}
