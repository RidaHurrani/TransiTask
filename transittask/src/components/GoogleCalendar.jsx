// import React, { useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from "@react-oauth/google";
// import gapi from "gapi-script";

// // Replace with your Google API client ID
// const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

// const GoogleCalendar = ({ addEventToCalendar }) => {
//   useEffect(() => {
//     gapi.load("client:auth2", () => {
//       gapi.auth2.init({ client_id: CLIENT_ID });
//     });
//   }, []);

//   const onSuccess = (response) => {
//     const { accessToken } = response;
//     console.log("Login Success", response);
//     localStorage.setItem("accessToken", accessToken);
//   };

//   const onFailure = (response) => {
//     console.log("Login failed", response);
//   };

//   const onLogoutSuccess = () => {
//     localStorage.removeItem("accessToken");
//     console.log("Logout successful");
//   };

//   const addEvent = (eventDetails) => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (!accessToken) {
//       console.log("User not authenticated");
//       return;
//     }

//     gapi.client.setApiKey(accessToken);
//     gapi.client.load("calendar", "v3", () => {
//       const event = {
//         summary: eventDetails.title,
//         description: eventDetails.description,
//         start: {
//           dateTime: eventDetails.startTime,
//           timeZone: "America/Los_Angeles",
//         },
//         end: {
//           dateTime: eventDetails.endTime,
//           timeZone: "America/Los_Angeles",
//         },
//       };

//       const request = gapi.client.calendar.events.insert({
//         calendarId: "primary",
//         resource: event,
//       });

//       request.execute((event) => {
//         console.log("Event created", event);
//         addEventToCalendar(event);
//       });
//     });
//   };

//   return (
//     <div>
//       {!localStorage.getItem("accessToken") ? (
//         <GoogleLogin
//           clientId={CLIENT_ID}
//           buttonText="Login with Google"
//           onSuccess={onSuccess}
//           onFailure={onFailure}
//           scope="https://www.googleapis.com/auth/calendar"
//         />
//       ) : (
//         <>
//           <button onClick={() => addEvent({ title: "Work", description: "Meeting", startTime: "2025-03-29T09:00:00", endTime: "2025-03-29T10:00:00" })}>
//             Add Event to Calendar
//           </button>
//           <GoogleLogout
//             clientId={CLIENT_ID}
//             buttonText="Logout"
//             onLogoutSuccess={onLogoutSuccess}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default GoogleCalendar;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { GoogleOAuthProvider } from "@react-oauth/google";

// const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";  // Replace with your actual client ID

// const App = () => {
//   return (
//     <GoogleOAuthProvider clientId={CLIENT_ID}>
//       <div>
//         <h1>Welcome to Your Website!</h1>
//         <button onClick={() => alert('Button clicked!')}>Click Me</button>
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));

// import { useGoogleLogin } from '@react-oauth/google';

// function GoogleCalendar() {
//     const login = useGoogleLogin({
//         onSuccess: tokenResponse => console.log(tokenResponse),
//         onError: error => console.error('Login Failed:', error),
//     });

//     return (
//         <div>
//             <button onClick={login}>Login with Google</button>
//         </div>
//     );
// }

// export default GoogleCalendar;










//////////////////Works Perfectly/////////////////////
// import React, { useState, useEffect } from "react";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import Calendar from 'react-calendar';  // Import react-calendar
// import 'react-calendar/dist/Calendar.css';  // Import react-calendar styles
// import './GoogleCalendar.css';

// function GoogleCalendar() {
//     const [events, setEvents] = useState([]);  // State to store calendar events
//     const [loading, setLoading] = useState(false);  // State for loading indicator
//     const [date, setDate] = useState(new Date());  // Selected date in the calendar

//     // Google OAuth login
//     const login = useGoogleLogin({
//         onSuccess: async (tokenResponse) => {
//             setLoading(true);
//             const accessToken = tokenResponse.access_token;
//             console.log("Access Token:", accessToken);

//             try {
//                 const response = await axios.get(
//                     "https://www.googleapis.com/calendar/v3/calendars/primary/events",
//                     {
//                         headers: { Authorization: `Bearer ${accessToken}` },
//                     }
//                 );
//                 setEvents(response.data.items || []);  // Set events to state
//                 console.log("Google Calendar Events:", response.data.items);
//             } catch (error) {
//                 console.error("Error fetching calendar events:", error);
//                 alert("Failed to fetch events. Please check the console for details.");
//             } finally {
//                 setLoading(false);
//             }
//         },
//         onError: () => {
//             console.error("Google login failed");
//             alert("Google login failed. Please try again.");
//         },
//         scope: "https://www.googleapis.com/auth/calendar.events",
//     });

//     // Handle date change on the calendar
//     const onDateChange = (newDate) => {
//         setDate(newDate);
//     };

//     // Get events for the selected date
//     const getEventsForDate = (date) => {
//         const dateString = date.toISOString().split('T')[0];  // Convert date to "YYYY-MM-DD"
//         return events.filter(event => event.start?.dateTime?.startsWith(dateString));  // Filter events by date
//     };

//     return (
//         <div>
//             <h2>Google Calendar</h2>
//             <button onClick={login} style={{ padding: "10px", borderRadius: "5px" }}>
//                 Login with Google Calendar
//             </button>
//             {loading && <p>Loading events...</p>}
            
//             {/* Calendar display */}
//             <Calendar
//                 onChange={onDateChange}  // Handle date change
//                 value={date}  // Set the selected date
//                 tileContent={({ date, view }) => {
//                     const eventsForDate = getEventsForDate(date);  // Get events for each date
//                     return eventsForDate.length > 0 ? (
//                         <ul style={{ padding: '0', margin: '0', fontSize: '12px' }}>
//                             {eventsForDate.map((event, index) => (
//                                 <li key={index} style={{ listStyleType: 'none', padding: '2px', background: '#f0f0f0', borderRadius: '4px' }}>
//                                     {event.summary || "No Title"}
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : null;
//                 }}
//             />
            
//             {/* List of all events (for reference)
//             <ul>
//                 {events.map((event, index) => (
//                     <li key={index}>
//                         {event.summary || "No Title"} - {event.start?.dateTime || event.start?.date || "No Start Date"}
//                     </li>
//                 ))}
//             </ul> */}
//         </div>
//     );
// }

// export default GoogleCalendar;




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

    // // Function to create an event
    // const createEvent = async () => {
    //     if (!accessToken) {
    //         alert("Please log in first!");
    //         return;
    //     }

    //     const event = {
    //         summary: newEvent.summary,
    //         description: newEvent.description,
    //         start: {
    //             dateTime: newEvent.startDateTime,
    //             timeZone: "America/Toronto" // Adjust time zone as needed
    //         },
    //         end: {
    //             dateTime: newEvent.endDateTime,
    //             timeZone: "America/Toronto"
    //         }
    //     };

    //     try {
    //         await axios.post(
    //             "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    //             event,
    //             {
    //                 headers: { Authorization: `Bearer ${accessToken}` },
    //             }
    //         );
    //         alert("Event created successfully!");
    //         setNewEvent({ summary: "", startDateTime: "", endDateTime: "", description: "" });
    //     } catch (error) {
    //         console.error("Error creating event:", error);
    //         alert("Failed to create event. Check console for details.");
    //     }
    // };

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