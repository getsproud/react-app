import React from 'react';

function LocationWedding(props) {
	const title = props.title || "location wedding";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31.9 20.4c-1.2-.6-2.6-1-3.9-.9-2.2 0-4.3.8-5.9 2.3-1.7 1.6-2.7 3.7-2.7 6.1-.1 2.5.9 5 2.7 6.8l7.4 7.4c.7.7 1.6 1 2.5 1s1.8-.3 2.5-1l7.6-7.6c1.7-1.7 2.6-3.8 2.5-6.2 0-2.3-.9-4.5-2.6-6.2-2.6-2.8-6.7-3.4-10.1-1.7zm7.7 11.5l-7.7 7.6-7.4-7.4c-1.1-1.1-1.7-2.6-1.7-4.2 0-1.4.6-2.7 1.6-3.6 1-.9 2.2-1.4 3.5-1.4 1.1 0 2.1.3 2.9.9.6.4 1.4.4 2 0 2.1-1.4 4.9-1.2 6.6.6 1 1 1.5 2.3 1.5 3.7.2 1.5-.3 2.8-1.3 3.8z"/>
		<path d="M32 1.2C17.2 1.2 5.1 13.3 5.1 28.1c0 18.2 24.9 33.7 26 34.4.3.2.6.3.9.3.3 0 .6-.1.9-.3 1.1-.7 25.9-16.4 25.9-34.4.1-14.8-12-26.9-26.8-26.9zm0 57.7C27.5 56 8.6 42.5 8.6 28.1 8.6 15.2 19.1 4.7 32 4.7s23.4 10.5 23.4 23.4c0 14.2-19 27.8-23.4 30.8z"/>
	</g>
</svg>
	);
};

export default LocationWedding;