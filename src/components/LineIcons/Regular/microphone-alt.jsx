import React from 'react';

function MicrophoneAlt(props) {
	const title = props.title || "microphone alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 34.9c6.7 0 12.1-5.4 12.1-12.1v-9.4c0-6.7-5.4-12.1-12.1-12.1S19.9 6.7 19.9 13.4v9.4c0 6.7 5.4 12.1 12.1 12.1zm-8.6-21.5c0-4.8 3.9-8.6 8.6-8.6 4.8 0 8.6 3.9 8.6 8.6v9.4c0 4.8-3.9 8.6-8.6 8.6-4.8 0-8.6-3.9-8.6-8.6v-9.4z"/>
		<path d="M52.9 23.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 9.5-7.8 17.2-17.4 17.2s-17.4-7.7-17.4-17.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 10.8 8.4 19.8 19.1 20.6v17c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44c10.8-.9 19.3-9.8 19.3-20.6z"/>
	</g>
</svg>
	);
};

export default MicrophoneAlt;