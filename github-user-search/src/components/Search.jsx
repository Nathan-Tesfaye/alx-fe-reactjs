import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setusername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setusername(e.target.value);
  };

  // Handles input changes for location
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Handles input changes for minimum repositories
  const handleMinReposChange = (e) => {
    setMinRepos(e.target.value);
  };

  //search functionality
  const handleSearch = async () => {
    setError("");
    setUserData([]);
    setLoading(true);

    try {
      const users = await fetchUserData(username, location, minRepos);

      if (users.length === 0) {
        setError("No user match search criteria");
      } else {
        setUserData(users);
      }
    } catch (error) {
      setError("An error occurred while fetching users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        className="mb-5"
      >
        {/* Username Input */}
        <div className="mb-3">
          <label htmlFor="username" className="mr-3">
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={handleInput}
            name="username"
            id="username"
            className="border border-black"
          />
        </div>

        {/* Location Input */}
        <div className="mb-3">
          <label htmlFor="location" className="mr-3">
            Location:
          </label>
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            name="location"
            id="location"
            className="border border-black"
          />
        </div>

        {/* Minimum Repositories Input */}
        <div className="mb-3">
          <label htmlFor="minRepos" className="mr-3">
            Minimum Repositories:
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={handleMinReposChange}
            name="minRepos"
            id="minRepos"
            className="border border-black"
          />
        </div>

        <button type="submit" className="border bg-purple-500 p-2 rounded-md">
          Search
        </button>
      </form>

      {/*error message  */}
      {error && <p>{error}</p>}

      {/* loading indicator */}
      {loading && <p>loading user data</p>}

      {/* userdata display */}
      {userData.length > 0 && (
        <div>
          <h2>Search result</h2>
          <ul>
            {userData.map((user) => (
              <li>
                <h3>{user.login}</h3>
                <a href={user.html_url}>View Profile</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
