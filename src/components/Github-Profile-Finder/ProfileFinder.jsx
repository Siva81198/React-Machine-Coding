import React, { useEffect, useState } from "react";
import UserData from "./UserData";

const ProfileFinder = () => {
  const [userName, setUserName] = useState("Siva81198");
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(userData);

  const fetchGithubUserData = async () => {
    console.log("Function Working!");

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      console.log(data.status);
      if (data.status == 404) {
        setUserData(null);
        setUserName("");
      } else {
        setUserData(data);
        setUserName("");
      }
    } catch (error) {
      console.log("Error while fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div
      className="github-profile-cont"
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {/* Input Field */}
      <input
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{
          width: "calc(100% - 110px)",
          padding: "10px",
          marginRight: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      />

      {/* Search Button */}
      <button
        onClick={fetchGithubUserData}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0366d6",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Search
      </button>

      {/* User Data Section */}
      <div
        className="userData"
        style={{
          marginTop: "20px",
          padding: "10px",
          borderTop: "1px solid #ddd",
        }}
      >
        {userData ? (
          <UserData userData={userData} />
        ) : (
          <div
            style={{
              fontSize: "14px",
              color: "#586069",
            }}
          >
            No users found...
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileFinder;
