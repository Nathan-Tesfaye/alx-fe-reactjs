import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setusername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setusername(e.target.value);
  };

  const handleSearch = async () => {
    setError("");
    setUserData(null);
    setLoading(true);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search">Search</label>
        <input
          type="text"
          value={username}
          onChange={handleInput}
          name="search"
          id="search"
        />
      </form>

      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}
      {loading && <p>loading user data</p>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Username: {userData.login}</p>
          <p>Location: {userData.location}</p>
          <p>Bio: {userData.bio}</p>
          <img src={userData.avatar_url} alt="Avatar" />
        </div>
      )}
    </div>
  );
};

export default Search;
