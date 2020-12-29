import React, { useEffect } from "react";

import { sentry, performanceMetrics } from "shell/Integrations";
import { useUserAuth } from "shell/Auth";

function MissionApp() {
  useEffect(() => {
    const data = performanceMetrics.usePerformanceData();
    console.log("Mission: Performance data ->", data);
  }, []);
  return <div>Mission</div>;
}

function Expose() {
  const { setRelease, setScope } = sentry.useSentryHelpers();
  const userAuth = useUserAuth();
  console.log(userAuth);
  useEffect(() => {
    const applicationTags = {
      "feature.name": "mission-automation"
    };
    setScope({
      tags: applicationTags
    });
    setRelease("mission-1.0.0");
  }, []);

  return <MissionApp />;
}

export default Expose;
