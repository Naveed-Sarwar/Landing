import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdSearch } from 'react-icons/io';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

function SearchBar({ map }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [show, setShow] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Bed");
  const [bathDropdown, setBathDropdown] = useState();
  const [bathValue , setBathValue] = useState("Bath");
  const [numDropdown, setNumDropdown] = useState();
  useEffect(() => {
    if (!map) return;

    const geocoder = new MapboxGeocoder({
      accessToken: "pk.eyJ1Ijoidmxvb2FsZXJ0cyIsImEiOiJjbGxwcDE0ZmUwMGFoM2NzMHp2MWNjYWw3In0.7iBcExvgp7upWOQXCAfDNQ",
      mapboxgl: mapboxgl,
    });

    geocoder.on('result', (e) => {
      // Handle the selected location result here (e.g., set map center)
      const selectedLocation = e.result.geometry.coordinates;
      map.flyTo({
        center: selectedLocation,
        zoom: 15, // Adjust the zoom level as needed
      });
    });

    // Append the geocoder input to your search bar container
    const searchContainer = document.getElementById('search-container');
    searchContainer.appendChild(geocoder.onAdd(map));

    // Set the geocoder's container to null to remove it when unmounting
    return () => {
      geocoder._clear(); // Clear the input value
      geocoder._map = null; // Set the geocoder's map reference to null
    };
  }, [map]);

  // Implement a function to fetch suggestions based on searchTerm using Mapbox Geocoding API
  const fetchSuggestions = async (searchTerm) => {

    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchTerm}.json?access_token=pk.eyJ1Ijoidmxvb2FsZXJ0cyIsImEiOiJjbGxwcDE0ZmUwMGFoM2NzMHp2MWNjYWw3In0.7iBcExvgp7upWOQXCAfDNQ`);
    const data = await response.json();
    setSuggestions(data.features);
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Fetch suggestions based on the searchTerm
    fetchSuggestions(searchTerm);
  }, [searchTerm]);

  const data = [
    { room: "1" },
    { room: "2" },
    { room: "3" },
    { room: "4" },
    { room: "5" },
    { room: "6" },

  ]

  const bathrooms = [
    { room: "1" },
    { room: "1.5" },
    { room: "2" },
    { room: "2.5" },
    { room: "3" },
    { room: "3.5" },
    { room: "4" },
    { room: "4.5" },
    { room: "5" },
    { room: "5.5" },
    { room: "6" },
  ]
  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <p className='text-xl text-white py-4 flex items-center justify-center'>Airbnb Envestors</p>
      <h1 className='text-[#DEBD6D] text-[40px] flex items-center justify-center'>Estimate Airbnb revenue for any address</h1>
      <p className='text-xl text-white py-1 flex items-center justify-center'>See how much any property would earn as a short-term rental</p>
      <div id="search-container" className="flex justify-center items-center mt-2">

        <div>
          <input
            type="text"
            className="w-[400px] h-14 p-2 text-[#9d9d9d] outline-none"
            placeholder="Search for a location"
            value={searchTerm}
            onClick={() => setShow(!show)}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {suggestions.length > 0 && show && (
            <div className="suggestions absolute mt-10 w-[400px] bg-white border rounded shadow-md">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.id}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setSelectedFeature(suggestion);
                      setSearchTerm(suggestion.place_name);
                      setShow(!show)
                    }}
                  >
                    {suggestion.place_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <button
            type="button"
            className={`flex bg-white relative w-[80px] lg:w-[108px] h-14 items-center justify-center text-lg font-normal leading-5  text-placeholder border-[#EFF1F7] border-[1.5px] `}

            onClick={() => setNumDropdown(!numDropdown)}
          >
            <p className="absolute left-4 text-black">{dropdownValue}</p>
            <MdKeyboardArrowDown
              className={`h-8 absolute right-1.5 lg:right-3 w-7 ${numDropdown ? "rotate-180" : ""
                }`}
            />
          </button>
          {numDropdown && (
            <div className="relative">
              <div className="z-[100] mt-2 py-2 h-[172px] absolute custom-scrollbar-thumb overflow-x-hidden overflow-y-scroll w-[80px] lg:w-[108px] rounded-[5px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {data?.map((item) => {
                  return (
                    <a className="text-[#888CA3] block pl-[14px] py-1 text-lg leading-5 font-normal hover:bg-[#758bae1f] cursor-pointer"
                      onClick={() => [
                        setNumDropdown(!numDropdown),
                        setDropdownValue(item.room),
                      ]}
                    >
                      {item.room}
                    </a>
                  );
                })}{" "}
              </div>
            </div>
          )}
        </div>


        <div>
          <button
            type="button"
            className={`flex bg-white relative w-[80px] lg:w-[108px] h-14 items-center justify-center text-lg font-normal leading-5  text-placeholder border-[#EFF1F7] border-[1.5px] `}

            onClick={() => setBathDropdown(!bathDropdown)}
          >
            <p className="absolute left-4 text-black">{bathValue}</p>
            <MdKeyboardArrowDown
              className={`h-8 absolute right-1.5 lg:right-3 w-7 ${bathDropdown ? "rotate-180" : ""
                }`}
            />
          </button>
          {bathDropdown && (
            <div className="relative">
              <div className="z-[100] mt-2 py-2 h-[172px] absolute custom-scrollbar-thumb overflow-x-hidden overflow-y-scroll w-[80px] lg:w-[108px] rounded-[5px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {bathrooms?.map((item) => {
                  return (
                    <a className="text-[#888CA3] block pl-[14px] py-1 text-lg leading-5 font-normal hover:bg-[#758bae1f] cursor-pointer"
                      onClick={() => [
                        setBathDropdown(!bathDropdown),
                        setBathValue(item.room),
                      ]}
                    >
                      {item.room}
                    </a>
                  );
                })}{" "}
              </div>
            </div>
          )}
        </div>
        <button className='bg-[#DEBD6D] h-14 w-20 flex items-center justify-center'><IoMdSearch fontSize={30} /></button>
      </div>
    </>
  );
}

export default SearchBar;
