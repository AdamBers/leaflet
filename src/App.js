import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import Routing from './Routing';
import './App.css';

function App() {
  const [active, setActive] = useState(0)
  const [data, setData] = useState([
    {
      id: 1,
      from: 'Moscow',
      fromLtd: 55.75,
      fromLgt: 37.62,
      to: 'London',
      toLtd: 51.50,
      toLgt: -0.1
    },
    {
      id: 2,
      from: 'Paris',
      fromLtd: 52.75,
      fromLgt: 13.62,
      to: 'Berlin',
      toLtd: 48.8,
      toLgt: 2.3
    },
    {
      id: 3,
      from: 'Monaco',
      fromLtd: 43.72,
      fromLgt: 7.39,
      to: 'Roma',
      toLtd: 41.9,
      toLgt: 12.5
    }
  ])

  console.log(data[0])

  const places = ([
    {
      city: 'Moscow',
      Ltd: 55.75,
      Lgt: 37.62
    },
    {
      city: 'London',
      Ltd: 51.50,
      Lgt: -0.1
    },
    {
      city: 'Paris',
      Ltd: 52.75,
      Lgt: 13.62
    },
    {
      city: 'Berlin',
      Ltd: 48.8,
      Lgt: 2.3
    },
    {
      city: 'Monaco',
      Ltd: 43.72,
      Lgt: 7.39
    },
    {
      city: 'Roma',
      Ltd: 41.9,
      Lgt: 12.5
    }
  ])

  const [currentDirection, setCurrentDirection] = useState(data[0])

  const handleClick = (id) => {
    setCurrentDirection(data[id - 1])
    setActive(id)
  }
  return (
    <div className="App">
      <div className="markers">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>From</th>
              <th>To</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id} onClick={() => handleClick(item.id)} className={active === item.id ? "active" : ""}>
                  <td>{item.id}</td>
                  <td>
                    <select defaultValue={item.from}>
                      {places.map((place, index) => <option key={index} value={place.city}>{place.city}</option>)}
                    </select>
                  </td>
                  <td>
                    <select defaultValue={item.to}>
                      {places.map((place, index) => <option  key={index} value={place.city}>{place.city}</option>)}
                    </select>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <MapContainer zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routing direction={currentDirection} />
      </MapContainer>
    </div >
  );
}

export default App;
