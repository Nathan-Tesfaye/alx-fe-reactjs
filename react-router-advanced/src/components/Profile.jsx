import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const BlogPost = () => {
  // useRouteMatch provides the current path and URL
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h1>Profile Page</h1>
      {/* Links for nested routes */}
      <nav>
        <Link to={`${url}/details`}>Profile Details</Link>
        <Link to={`${url}/settings`} style={{ marginLeft: "10px" }}>
          Profile Settings
        </Link>
      </nav>

      {/* Nested Routes */}
      <Route path={`${path}/details`} component={ProfileDetails} />
      <Route path={`${path}/settings`} component={ProfileSettings} />
    </div>
  );
};

export default BlogPost;
