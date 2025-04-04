

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // For custom icons

// Define custom icons
const orangeIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const blueIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const purpleIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const greenIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const userPinIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component to handle user interactions with the map
const AddMarker = ({ onAddMarker }) => {
    useMapEvents({
        click: (e) => {
            const { lat, lng } = e.latlng; // Get latitude and longitude
            const label = window.prompt("Enter a label for this pin:"); // Prompt user for a label
            if (label) {
                onAddMarker({ position: [lat, lng], label }); // Add the marker with the label
            }
        },
    });

    return null; // This component does not render any UI
};

const Map = () => {
    const [customPins, setCustomPins] = useState([]); // State for red pins only

    // Function to add a new custom pin
    const addMarker = (marker) => {
        setCustomPins([...customPins, marker]);
    };

    // Function to update a custom pin's label
    const updateMarkerLabel = (index) => {
        const newLabel = window.prompt("Enter a new label for this pin:");
        if (newLabel) {
            const updatedPins = customPins.map((marker, i) =>
                i === index ? { ...marker, label: newLabel } : marker
            );
            setCustomPins(updatedPins);
        }
    };

    // Function to remove a custom pin
    const removeMarker = (index) => {
        const updatedPins = customPins.filter((_, i) => i !== index);
        setCustomPins(updatedPins);
    };

    return (
        <MapContainer
            center={[43.47511, -80.5295]} // Lazaridis Hall coordinates
            zoom={14}
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
            />
            {/* Fixed gas stations (orange markers) */}
            <Marker position={[43.4709, -80.5340]} icon={orangeIcon}>
                <Popup>Gas Station 1</Popup>
            </Marker>
            <Marker position={[43.4685, -80.5405]} icon={orangeIcon}>
                <Popup>Gas Station 2</Popup>
            </Marker>
            <Marker position={[43.4732, -80.5210]} icon={orangeIcon}>
                <Popup>Gas Station 3</Popup>
            </Marker>
            <Marker position={[43.4768, -80.5443]} icon={orangeIcon}>
                <Popup>Gas Station 4</Popup>
            </Marker>
            <Marker position={[43.4711, -80.5250]} icon={orangeIcon}>
                <Popup>Gas Station 5</Popup>
            </Marker>
            <Marker position={[43.4770, -80.5310]} icon={orangeIcon}>
                <Popup>Gas Station 6</Popup>
            </Marker>
            <Marker position={[43.4695, -80.5335]} icon={orangeIcon}>
                <Popup>Gas Station 7</Popup>
            </Marker>
            <Marker position={[43.4740, -80.5420]} icon={orangeIcon}>
                <Popup>Gas Station 8</Popup>
            </Marker>

            {/* Fixed Colleges/Universities (blue markers) */}
            <Marker position={[43.4738, -80.5373]} icon={blueIcon}>
                <Popup>University of Waterloo</Popup>
            </Marker>
            <Marker position={[43.4742, -80.5282]} icon={blueIcon}>
                <Popup>Wilfrid Laurier University</Popup>
            </Marker>
            <Marker position={[43.4106, -80.5304]} icon={blueIcon}>
                <Popup>Conestoga College</Popup>
            </Marker>

            {/* Fixed hospitals (green markers) */}
            <Marker position={[43.4757, -80.5205]} icon={greenIcon}>
                <Popup>Grand River Hospital</Popup>
            </Marker>
            <Marker position={[43.4515, -80.4958]} icon={greenIcon}>
                <Popup>St. Mary's General Hospital</Popup>
            </Marker>
            
            {/* Fixed Grocery stores (purple markers) */}
            <Marker position={[43.4688, -80.5236]} icon={purpleIcon}>
                <Popup>Grocery Store 1</Popup>
            </Marker>
            <Marker position={[43.4770, -80.5302]} icon={purpleIcon}>
                <Popup>Grocery Store 2</Popup>
            </Marker>
            <Marker position={[43.4725, -80.5450]} icon={purpleIcon}>
                <Popup>Grocery Store 3</Popup>
            </Marker>
            <Marker position={[43.4710, -80.5332]} icon={purpleIcon}>
                <Popup>Grocery Store 4</Popup>
            </Marker>
            <Marker position={[43.4746, -80.5203]} icon={purpleIcon}>
                <Popup>Grocery Store 5</Popup>
            </Marker>
            <Marker position={[43.4690, -80.5290]} icon={purpleIcon}>
                <Popup>Grocery Store 6</Popup>
            </Marker>
            <Marker position={[43.4730, -80.5315]} icon={purpleIcon}>
                <Popup>Grocery Store 7</Popup>
            </Marker>
            <Marker position={[43.4780, -80.5250]} icon={purpleIcon}>
                <Popup>Grocery Store 8</Popup>
            </Marker>

            {/* Dynamic custom pins (red markers) */}
            <AddMarker onAddMarker={addMarker} />
            {customPins.map((marker, index) => (
                <Marker key={index} position={marker.position} icon={userPinIcon}>
                    <Popup>
                        <span>{marker.label}</span>
                        <br />
                        <button onClick={() => updateMarkerLabel(index)}>Edit Label</button>
                        <br />
                        <button onClick={() => removeMarker(index)}>Remove Pin</button>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
