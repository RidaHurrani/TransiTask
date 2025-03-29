import React, { useEffect, useState } from "react";
import axios from "axios";

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    axios
      .get("http://localhost:5000/auth/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
        setLoading(false); 
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setLoading(false); 
      });
  }, []);

  const login = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const logout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then(() => {
        setUser(null); 
        window.location.href = "http://localhost:3000/"; 
      })
      .catch((err) => {
        console.error("Error logging out:", err);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
};

export default GoogleLogin;
