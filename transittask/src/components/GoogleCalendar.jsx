


import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GoogleCalendar.css';

function GoogleCalendar() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(new Date());
    const [accessToken, setAccessToken] = useState(null); // Store access token

    // State for event creation form
    const [newEvent, setNewEvent] = useState({
        summary: "",
        startDateTime: "",
        endDateTime: "",
        description: ""
    });

    const fetchEvents = async (accessToken) => {
        try {
            const response = await axios.get(
                "https://www.googleapis.com/calendar/v3/calendars/primary/events",
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );
            setEvents(response.data.items || []);
            console.log("Updated Google Calendar Events:", response.data.items);
        } catch (error) {
            console.error("Error fetching calendar events:", error);
        }
    };

    // Google OAuth login
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setLoading(true);
            const token = tokenResponse.access_token;
            setAccessToken(token); // Store access token
            console.log("Access Token:", token);

            try {
                const response = await axios.get(
                    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                // setEvents(response.data.items || []);
                fetchEvents(accessToken);
                console.log("Google Calendar Events:", response.data.items);
            } catch (error) {
                console.error("Error fetching calendar events:", error);
                alert("Failed to fetch events. Please check the console for details.");
            } finally {
                setLoading(false);
            }
        },
        onError: () => {
            console.error("Google login failed");
            alert("Google login failed. Please try again.");
        },
        scope: "https://www.googleapis.com/auth/calendar.events",
    });

    // Handle input change in event creation form
    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    
 

    const createEvent = async () => {
        if (!accessToken) {
            alert("Please log in first!");
            return;
        }
    
        // Ensure start and end times are in the correct format
        const startISO = newEvent.startDateTime ? newEvent.startDateTime + ":00Z" : null;
        const endISO = newEvent.endDateTime ? newEvent.endDateTime + ":00Z" : null;
    
        if (!startISO || !endISO) {
            alert("Please provide start and end date/time.");
            return;
        }
    
        const event = {
            summary: newEvent.summary || "No Title",
            description: newEvent.description || "",
            start: {
                dateTime: startISO,
                timeZone: "America/Toronto" // Adjust time zone if needed
            },
            end: {
                dateTime: endISO,
                timeZone: "America/Toronto"
            }
        };
    
        try {
            const response = await axios.post(
                "https://www.googleapis.com/calendar/v3/calendars/primary/events",
                event,
                {
                    headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
                }
            );
    
            alert("Event created successfully!");
            console.log("Created Event:", response.data);
            
            // Refresh events after creation
            // fetchEvents();
            fetchEvents(accessToken);
    
            setNewEvent({ summary: "", startDateTime: "", endDateTime: "", description: "" });
        } catch (error) {
            console.error("Error creating event:", error.response ? error.response.data : error.message);
            alert(`Failed to create event: ${error.response?.data?.error?.message || "Check console for details."}`);
        }
    };

    // Handle date selection in calendar
    const onDateChange = (newDate) => {
        setDate(newDate);
    };

    // Filter events for selected date
    const getEventsForDate = (date) => {
        const dateString = date.toISOString().split('T')[0];
        return events.filter(event => event.start?.dateTime?.startsWith(dateString));
    };

    return (
        <div>
            <h2>Google Calendar</h2>
            <button onClick={login} style={{ padding: "10px", borderRadius: "5px" }}>
                Login with Google Calendar
            </button>
            {loading && <p>Loading events...</p>}
            
            <Calendar
                onChange={onDateChange}
                value={date}
                tileContent={({ date, view }) => {
                    const eventsForDate = getEventsForDate(date);
                    return eventsForDate.length > 0 ? (
                        <ul style={{ padding: '0', margin: '0', fontSize: '12px' }}>
                            {eventsForDate.map((event, index) => (
                                <li key={index} style={{ listStyleType: 'none', padding: '2px', background: '#f0f0f0', borderRadius: '4px' }}>
                                    {event.summary || "No Title"}
                                </li>
                            ))}
                        </ul>
                    ) : null;
                }}
            />

            {/* Event Creation Form */}
            <h3>Add Event</h3>
            <input
                type="text"
                name="summary"
                placeholder="Event Title"
                value={newEvent.summary}
                onChange={handleInputChange}
            />
            <input
                type="datetime-local"
                name="startDateTime"
                value={newEvent.startDateTime}
                onChange={handleInputChange} required
            />
            <input
                type="datetime-local"
                name="endDateTime"
                value={newEvent.endDateTime}
                onChange={handleInputChange} required
            />
            <textarea
                name="description"
                placeholder="Description"
                value={newEvent.description}
                onChange={handleInputChange}
            />
            <button onClick={createEvent} style={{ padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
                Add Event
            </button>
        </div>
    );
}

export default GoogleCalendar;