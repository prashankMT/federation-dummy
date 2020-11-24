import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { sentry } from 'shell/Integrations';
import { withTranslations } from 'shell/hocs';

import { ChangeLanguage } from './Testing'

function App() {
  return <div>
    <h4>
      {/* <FormattedMessage id='title' defaultMessage='Default Coching Title' /> */}
      Coaching
    </h4>
  </div>
}

const CoachingApp = withTranslations(App);

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