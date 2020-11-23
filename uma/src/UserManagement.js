import React, { useEffect } from 'react';
import { sentry } from 'shell/Integrations';

function UserManagementApp() {
  return <div>User Management</div>
}

function Expose() {
  const { setRelease, setScope } = sentry.useSentryHelpers();
  useEffect(async () => {
    const applicationTags = {
      'feature.name': 'user-automation'
    };

    setRelease('user-management-1.0.0');
    setScope({
      tags: applicationTags
    })
  }, []);

  return <UserManagementApp />;
}

export default Expose