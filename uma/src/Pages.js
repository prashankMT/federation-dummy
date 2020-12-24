import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.MTRealtimeUserMonitoring &&
      window.MTRealtimeUserMonitoring.appRenderComplete({
        dummyField: "hello eve from About"
      });
  }, []);
  return (
    <>
      <li>
        <Link to="../../">Goto Home</Link>
      </li>
      <h2>About</h2>
      <div>Its all about About</div>
    </>
  );
};

const Basics = () => {
  useEffect(() => {
    window.MTRealtimeUserMonitoring &&
      window.MTRealtimeUserMonitoring.appRenderComplete({
        dummyField: "hello eve from Basics"
      });
  }, []);
  return (
    <>
      <li>
        <Link to="../../">Goto Home</Link>
      </li>
      <h2>Basics</h2>
      <div>User's Basic Details</div>
    </>
  );
};

/**
 * for About page Link, isInternalApplicationRedirect : true,
 * will tell PerformanceTracker i won't be using the performance data.
 */
const Details = () => {
  return (
    <>
      <h3>User Details</h3>
      <nav>
        <ul>
          <li>
            <Link
              to="./about"
              state={{
                isInternalApplicationRedirect: true,
                fromLocation: { pathname: location.pathname }
              }}
            >
              Goto About
            </Link>
          </li>
          <li>
            <Link to="./basics">Goto Basics</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export { Details, About, Basics };
