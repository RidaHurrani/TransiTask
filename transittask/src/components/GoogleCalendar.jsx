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

import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function GoogleCalendar() {
    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const accessToken = tokenResponse.access_token;
            try {
                const events = await axios.get(
                    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
                    {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    }
                );
                console.log("Google Calendar Events:", events.data.items);
                alert("Events fetched! Check the console.");
            } catch (error) {
                console.error("Error fetching events:", error);
                alert("Failed to fetch events.");
            }
        },
        onError: () => {
            console.error("Login failed");
            alert("Login failed. Please try again.");
        },
    });

    return (
        <GoogleOAuthProvider clientId="955352316075-iloh6vusff6jurcao7524l2bn3btjb3d.apps.googleusercontent.com">
            <div>
                <button onClick={login} style={{ padding: "10px", borderRadius: "5px" }}>
                    Login with Google Calendar
                </button>
            </div>
        </GoogleOAuthProvider>
    );
}

export default GoogleCalendar;
