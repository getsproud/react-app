import React from 'react';

function UserAlt(props) {
	const title = props.title || "user alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 27.3c7.4 0 13.4-5.8 13.4-13s-6-13-13.4-13-13.4 5.8-13.4 13 6 13 13.4 13zm0-22.5c5.5 0 9.9 4.3 9.9 9.5s-4.5 9.5-9.9 9.5c-5.5 0-9.9-4.3-9.9-9.5s4.4-9.5 9.9-9.5z"/>
		<path d="M38.3 32.5H25.7c-9.5 0-17.3 7.7-17.3 17.3v9.9c0 1.7 1.4 3.1 3.1 3.1h40.9c1.7 0 3.1-1.4 3.1-3.1v-9.9c.1-9.6-7.7-17.3-17.2-17.3zm13.8 26.8H11.9v-9.5c0-7.6 6.2-13.8 13.8-13.8h12.6c7.6 0 13.8 6.2 13.8 13.8v9.5z"/>
	</g>
</svg>
	);
};

export default UserAlt;