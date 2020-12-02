import React, { useEffect } from "react";
import { sentry } from "shell/Integrations";
import { TriggerError } from "./Testing";

function UserManagementApp() {
  return <div>User Management</div>;
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
