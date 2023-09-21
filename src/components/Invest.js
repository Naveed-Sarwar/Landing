import React, { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import SearchBarMap from './searchBar/SearchBarMap';

export default function Home() {
  const [map, setMap] = useState(null); // Initialize the map instance

  // Function to set the map instance
  const handleMapLoad = (map) => {
    setMap(map);
  };

  return (
    <div>
      <main>
        <SearchBar map={map} /> {/* Pass the map instance as a prop */}
        {/* <SearchBarMap onLoad={handleMapLoad} /> */}
      </main>
    </div>
  );
}
