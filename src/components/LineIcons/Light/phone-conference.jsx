import React from 'react';

function PhoneConference(props) {
	const title = props.title || "phone conference";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 46.3l-9.6-6.4c-1.9-1.3-4.4-.6-5.9 1.5l-2.4 3.4c-.3.4-.9.6-1.3.3-13-8.1-21.1-19.5-24-24-.3-.5-.2-1.1.3-1.4l3.9-2.7c1.8-1.2 2.3-3.7 1.1-5.6l-6.4-9.6C16.7 0 14.3-.5 12.4.6L3.1 6.1c-.1.1-.2.1-.3.2C.9 8.2 0 10.8 0 14c0 8.7 7 21.4 17.8 32.2C29.1 57.4 41.5 64 50.1 64c3.2 0 5.8-.9 7.7-2.8.1-.1.2-.2.2-.3l5.4-9.2a4 4 0 0 0-1.2-5.4zm-1.4 3.9l-5.3 9c-5.7 5.4-21.9-1.5-35.6-15.1C9.7 33.8 3 22 3 14c0-2.3.6-4.2 1.8-5.4l9-5.3c.5-.3 1.1-.1 1.4.3l6.4 9.6c.3.5.2 1.1-.3 1.4l-3.9 2.7c-1.8 1.2-2.3 3.6-1.1 5.5 3 4.7 11.4 16.4 25 24.9 1.8 1.1 4.2.6 5.4-1.1l2.4-3.4c.4-.6 1.1-1.1 1.7-.7l9.6 6.4c.6.2.7.8.4 1.3z"/>
		<path d="M45.9 11.3h6.8v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V1.5C55.7.7 55 0 54.2 0s-1.5.7-1.5 1.5v6.8h-6.8c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default PhoneConference;