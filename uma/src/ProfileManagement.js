import React, { useEffect } from 'react';
import { sentry } from 'shell/Integrations';

function ProfileManagementApp() {
	return <div>Profile Management</div>
}

function Expose() {
	const { setRelease, setScope } = sentry.useSentryHelpers();

	useEffect(async () => {
		const applicationTags = {
			'feature.name': 'profile-automation'
		};
		setScope({
			tags: applicationTags
		})
		setRelease('profile-management-1.0.0');
	}, []);

	return <ProfileManagementApp />;
}

export default Expose