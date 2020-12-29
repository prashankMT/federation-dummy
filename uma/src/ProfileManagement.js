import React, { useEffect } from "react";
import { Route, Link, Routes } from "react-router-dom";

import { sentry, performanceMetrics } from "shell/Integrations";

import { Details, About, Basics } from "./Pages";

const ProfileManagementApp = () => {
  useEffect(() => {
    const data = performanceMetrics.usePerformanceData();
    console.log("Profile: Performance data ->", data);
  }, []);
  return (
    <>
      <nav>
        <li>
          <Link to="./details">Details</Link>
        </li>
      </nav>
      <h2>Home</h2>
      <div>Profile Management Home</div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="details" element={<Details />}>
          <Route path="about" element={<About />} />
          <Route path="basics" element={<Basics />} />
        </Route>
        <Route path="" element={<ProfileManagementApp />} />
      </Routes>
    </>
  );
};

function Expose() {
  const { setRelease, setScope } = sentry.useSentryHelpers();

  useEffect(async () => {
    const applicationTags = {
      "feature.name": "profile-automation"
    };
    setScope({
      tags: applicationTags
    });
    setRelease("profile-management-1.0.0");
  }, []);

  return <App />;
}

export default Expose;
