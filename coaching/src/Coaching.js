import React, { useEffect } from 'react';
import { sentry } from 'shell/Integrations';
import { FormattedMessage } from 'shell/Intl';

import { ChangeLanguage } from './Testing'

function CoachingApp() {
  return <div>
    <h4>
      <FormattedMessage id='title' defaultMessage='Default Coching Title' />
    </h4>
  </div>
}

function Expose(props) {
  const { setRelease, setScope } = sentry.useSentryHelpers();

  useEffect(async () => {
    const applicationTags = {
      'feature.name': 'coaching-automation'
    };
    setScope({
      tags: applicationTags
    });
    setRelease('coaching-1.0.0');
  }, []);

  return <>
    <ChangeLanguage changeLanguage={props.changeLanguage} />
    <CoachingApp {...props} />
  </>
}


export default Expose