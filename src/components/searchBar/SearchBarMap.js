import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const SearchBarMap = ({ onLoad }) => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoidmxvb2FsZXJ0cyIsImEiOiJjbGxwcDE0ZmUwMGFoM2NzMHp2MWNjYWw3In0.7iBcExvgp7upWOQXCAfDNQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128], // Example coordinates (New York City)
      zoom: 12,
    });

    // Call the onLoad callback to pass the map instance to the parent component
    onLoad(map);
  }, [onLoad]);

  return (
    <div id="map" style={{ width: '100%', height: '300px' }}></div>
  );
};

export default SearchBarMap;
