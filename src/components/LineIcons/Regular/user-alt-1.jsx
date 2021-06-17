import React from 'react';

function UserAlt1(props) {
	const title = props.title || "user alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 27.3c7.4 0 13.4-5.8 13.4-13s-6-13-13.4-13-13.4 5.8-13.4 13 6 13 13.4 13zm0-22.5c5.5 0 9.9 4.3 9.9 9.5s-4.5 9.5-9.9 9.5c-5.5 0-9.9-4.3-9.9-9.5s4.4-9.5 9.9-9.5z"/>
		<path d="M32 34.4C19 34.4 8.4 45 8.4 58v3c0 1 .8 1.8 1.8 1.8S12 62 12 61v-3c0-11.1 9-20.1 20.1-20.1s20.1 9 20.1 20.1v3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3C55.6 45 45 34.4 32 34.4z"/>
	</g>
</svg>
	);
};

export default UserAlt1;