import React from "react";

const UserData = ({ userData }) => {
  const { avatar_url, public_repos, name, login, created_at } = userData;
  console.log(userData);

  const creationDate = new Date(created_at);
  console.log(creationDate);

  return (
    <div
      className="user-data-cont"
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Avatar Section */}
      <div>
        <img
          src={avatar_url}
          alt="User"
          className="avatar"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "16px",
          }}
        />
      </div>

      {/* Name and Join Date Section */}
      <div
        className="name-container"
        style={{
          flex: 1,
        }}
      >
        <a
          href={`https://github.com/${login}`}
          style={{
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#0366d6",
            marginBottom: "8px",
            display: "inline-block",
          }}
        >
          {name || login}
        </a>
        <p
          style={{
            fontSize: "14px",
            color: "#586069",
            margin: "4px 0 0",
          }}
        >
          User joined on{" "}
          {`${creationDate.getDate()} ${creationDate.toLocaleString("en-us", {
            month: "long",
          })} ${creationDate.getFullYear()}`}
        </p>
      </div>

      {/* Profile Info Section */}
      <div
        className="profile-info"
        style={{
          textAlign: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "14px",
              color: "#586069",
              margin: "0",
            }}
          >
            Public Repos
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "8px 0 0",
            }}
          >
            {public_repos}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
