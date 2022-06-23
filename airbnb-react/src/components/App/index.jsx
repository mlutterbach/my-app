import { useEffect, useState } from "react";
import './App.scss';
import ReactMapboxGl from 'react-mapbox-gl';
import Flat from "../Flat";
import FlatMarker from "../FlatMarker";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_MAPBOX_API_KEY;
const Map = ReactMapboxGl({
  //accessToken: API_KEY,
  accessToken: `${API_KEY}`,
});


const API_URL = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
const DEFAULT_CENTER = [2.3468, 48.884211];


const App = () => {
  const [flats, setFlats] = useState([]);
  const [searchText, setSearchText] = useState(['']);
  const [selectedId, setSelectedId] = useState();
  const [center, setCenter] = useState(DEFAULT_CENTER);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFlatSelect = ({ id, lng, lat }) => {
    if (selectedId === id) {
      setCenter(DEFAULT_CENTER);
      setSelectedId();
    } else {
      setCenter([lng, lat]);
      setSelectedId(id);
    }
  };

  const filteredFlats = flats.filter(flat => flat.name.match(new RegExp(searchText, 'i')));

  return (
    <div className='app'>
      <div className='main'>
        <Search onSearch={handleSearch} />
        <div className='flats'>
          {filteredFlats.map(flat => {
            return (
              <Flat
                key={flat.id}
                imageUrl={flat.imageUrl}
                price={flat.price}
                name={flat.name}
                onSelect={() => handleFlatSelect(flat)}
                selected={flat.id === selectedId }
              />
            );
          })}
        </div>
      </div>
      <div className='map'>
        < Map
          zoom={[14]} // starting zoom
          center= {center} // starting position [lng, lat]
          containerStyle={{height: '100vh', width: '100%'}} // container ID
          style= 'mapbox://styles/mapbox/streets-v8' // style URL
        >
          {filteredFlats.map((flat) => {
            return (
              <FlatMarker
                key={flat.id}
                price={flat.price}
                lat={flat.lat}
                lng={flat.lng}
                selected={flat.id === selectedId}
                onSelect={() => handleFlatSelect(flat)}
              />
            );
          })};
        </Map>
      </div>
    </div>
  );
};

export default App;
