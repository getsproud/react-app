import React from 'react';

function MedalAlt(props) {
	const title = props.title || "medal alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.9 29c0-5.2-2-9.8-5.2-13.4V7.2c0-3.3-2.7-6-6-6H23.2c-3.3 0-6 2.7-6 6v8.4C14 19.1 12 23.8 12 29c0 5.2 2 9.8 5.2 13.4v17.7c0 .9.5 1.8 1.3 2.3.4.2.9.4 1.3.4s.8-.1 1.2-.3l10.5-5.4c.3-.1.6-.1.8 0l10.5 5.4c.8.4 1.8.4 2.6 0 .8-.5 1.3-1.3 1.3-2.3V42.4c3.3-3.6 5.2-8.2 5.2-13.4zM23.2 4.8h17.5c1.4 0 2.5 1.1 2.5 2.5v5.3C40 10.3 36.2 9 32 9c-4.2 0-8 1.3-11.2 3.5V7.2c0-1.3 1.1-2.4 2.4-2.4zm8.8 7.7c9.1 0 16.4 7.4 16.4 16.4C48.4 38 41 45.3 32 45.3c-9.1 0-16.4-7.4-16.4-16.4 0-9 7.3-16.4 16.4-16.4zm2 41.4c-1.2-.6-2.7-.6-3.9 0l-9.3 4.7V45.5C24 47.7 27.9 49 32 49c4.2 0 8-1.3 11.2-3.5v13.2L34 53.9z"/>
		<path d="M32 37.9c4.9 0 8.9-4 8.9-8.9s-4-8.9-8.9-8.9-8.9 4-8.9 8.9 4 8.9 8.9 8.9zm0-14.3c3 0 5.4 2.4 5.4 5.4S35 34.4 32 34.4 26.6 32 26.6 29s2.4-5.4 5.4-5.4z"/>
	</g>
</svg>
	);
};

export default MedalAlt;