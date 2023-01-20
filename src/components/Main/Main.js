import { useState } from 'react';
import { useCountries } from '../../hooks/getThings';
import './Main.css';

export default function Main() {
  const [continent, setContinent] = useState('All');
  const [query, setQuery] = useState('');
  const { countries, loading, error } = useCountries();
 

  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }
  if (loading) return <p className="loader">Please have some patience, your flags are loading....</p>;

  return (
    <div>
      <h1>Countries of the World</h1>
      <div className="filters">
        <input
          placeholder="Search Countries"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        /> 
        <div>

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
        </div>
      </div>
      <div className="countries-list">
        <p style={{ color: 'red' }}>{error}</p>
        {filterCountries().map((country) => (
      
          <div className="country" key={country.id}>
            <img
              src={`https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png`} width="72" height="54"
              alt={'Flag of ' + country.name}
            />
            <span>{' ' + country.name}</span>
          </div>
        ))}</div>
    
    </div>

  );
  
}