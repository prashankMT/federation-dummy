import React, { useEffect } from "react";
import { sentry, PerformanceTracking } from "shell/Integrations";
import { TriggerError } from "./Testing";

function UserManagementApp() {
  useEffect(() => {
    const data = PerformanceTracking.usePerformanceData();
    console.log("Profile: Performance data ->", data);
  }, []);
  return (
    <>
      <div>User Management</div>
    </>
  );
}

function Expose() {
  const { setRelease, setScope } = sentry.useSentryHelpers();
  useEffect(async () => {
    const applicationTags = {
      "feature.name": "user-automation",
      commithash: COMMITHASH
    };

    setRelease(SENTRY_RELEASE);
    setScope({
      tags: applicationTags
    });
  }, []);

  return (
    <>
      <UserManagementApp />
      <TriggerError />
    </>
  );
}

export default Expose;
