import React from 'react';

function UserAlt2(props) {
	const title = props.title || "user alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 27.3c7.4 0 13.4-5.8 13.4-13s-6-13-13.4-13-13.4 5.8-13.4 13 6 13 13.4 13zm0-22.5c5.5 0 9.9 4.3 9.9 9.5s-4.5 9.5-9.9 9.5c-5.5 0-9.9-4.3-9.9-9.5s4.4-9.5 9.9-9.5z"/>
		<path d="M42.3 32.5H21.7c-7.3 0-13.3 6-13.3 13.3V59c0 2.1 1.7 3.8 3.8 3.8h39.7c2.1 0 3.8-1.7 3.8-3.8V45.7c-.1-7.3-6.1-13.2-13.4-13.2zM52.1 59c0 .1-.1.3-.3.3H12.2c-.1 0-.3-.1-.3-.3V45.7c0-5.4 4.4-9.8 9.8-9.8h20.6c5.4 0 9.8 4.4 9.8 9.8V59z"/>
	</g>
</svg>
	);
};

export default UserAlt2;