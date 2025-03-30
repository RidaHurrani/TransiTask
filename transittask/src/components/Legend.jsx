import React from "react";
import "./Legend.css";

const Legend = () => {
    return (
        <div className="legend-wrapper">
            <h3 className="legend-title">Legend</h3>
            <div className="legend-container">
                <ul>
                    <li><span className="legend-icon orange"></span> Gas Stations (Orange)</li>
                    <li><span className="legend-icon blue"></span> Colleges/Universities (Blue)</li>
                    <li><span className="legend-icon purple"></span> Grocery Stores (Purple)</li>
                    <li><span className="legend-icon red"></span> Custom Pins (Red)</li>
                </ul>
            </div>
        </div>
    );
};

export default Legend;
