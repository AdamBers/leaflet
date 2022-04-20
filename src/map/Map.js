import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { useSelector } from 'react-redux'
import Routing from './Routing'

function Map() {
    const data = useSelector(state => state.set)
    const currentDirectionIndex = useSelector(state => state.currentDirection)
    return (
        <MapContainer id='map' zoom={10}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Routing direction={data[currentDirectionIndex]}  />
        </MapContainer>
    )
}

export default Map