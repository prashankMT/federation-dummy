import React, { useEffect } from 'react';
import { sentry } from 'shell/Integrations';

function CoachingApp() {
  return <div>Coaching</div>
}

function Expose() {
  const { setRelease, setScope } = sentry.useSentryHelpers();

  useEffect(async () => {
    const applicationTags = {
      'feature.name': 'coaching-automation'
    };
    setScope({
      tags: applicationTags
    })
    setRelease('coaching-1.0.0');
  }, []);
  return <CoachingApp />
}


export default Expose