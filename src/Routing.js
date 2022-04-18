import { useEffect } from "react";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import L from 'leaflet'
import { useMap } from 'react-leaflet'

function Routing({ direction }) {
    const map = useMap();
    useEffect(() => {
        if (!map) return;
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(direction.fromLtd, direction.fromLgt), L.latLng(direction.toLtd, direction.toLgt)],
            routeWhileDragging: true
        }).addTo(map);
        return () => map.removeControl(routingControl);
    }, [map, direction]);
    return null;
}

export default Routing