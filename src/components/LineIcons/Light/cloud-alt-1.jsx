import React from 'react';

function CloudAlt1(props) {
	const title = props.title || "cloud alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.9 26c-1.5 0-2.9.3-4.3.8-.4-8.7-7.4-15.7-16-15.7-6.1 0-11.6 3.5-14.3 9h-.2C7.2 20 0 27.4 0 36.5c0 9.1 7.2 16.4 16 16.4h34.9c7.2 0 13.1-6 13.1-13.5C64 32.1 58.1 26 50.9 26zm0 23.9H16c-7.2 0-13-6-13-13.4S8.8 23 16 23c.4 0 .7 0 1 .1.7.1 1.2-.3 1.5-.9 2.1-4.9 6.8-8.1 12-8.1 7.2 0 13 6 13 13.4 0 .6 0 1-.1 1.4-.1.6.2 1.2.6 1.5.5.3 1.1.3 1.6 0 1.6-1 3.4-1.5 5.2-1.5C56.5 29 61 33.7 61 39.5c0 5.7-4.5 10.4-10.1 10.4z"/>
	</g>
</svg>
	);
};

export default CloudAlt1;