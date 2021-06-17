import React from 'react';

function Drop(props) {
	const title = props.title || "drop";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.1 64C20.7 64 11.2 55.2 11 44.3v-2.2c0-5.4 1.4-11.2 4.1-17.4 3.2-7.6 8.5-16.1 14.3-23.5C30 .5 31 0 32.1 0s2 .5 2.7 1.3C41 9 46.1 17.4 49.1 25.1c2.6 6.4 3.9 12 3.9 17.2v2.1C52.9 55.2 43.5 64 32.1 64zm0-61c-.1 0-.2 0-.4.2C26 10.3 21 18.6 17.8 26 15.3 31.8 14 37.3 14 42.2v2.1c.2 9.2 8.3 16.7 18.1 16.7S50 53.6 50 44.5v-2.1c0-4.8-1.2-10.1-3.7-16.1-2.9-7.3-7.9-15.7-13.9-23.1-.1-.2-.2-.2-.3-.2z"/>
	</g>
</svg>
	);
};

export default Drop;