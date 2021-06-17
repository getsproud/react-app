import React from 'react';

function Eye(props) {
	const title = props.title || "eye";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 39.1c-3.9 0-7-3.2-7-7.1s3.2-7.1 7-7.1c3.9 0 7 3.2 7 7.1s-3.1 7.1-7 7.1zm0-11.2c-2.2 0-4 1.8-4 4.1s1.8 4.1 4 4.1 4-1.8 4-4.1-1.8-4.1-4-4.1z"/>
		<path d="M32 50.3C19 50.3 7.2 43.8.3 33c-.4-.6-.4-1.4 0-2.1C7.2 20.1 19 13.7 32 13.7S56.8 20.2 63.7 31c.4.6.4 1.4 0 2.1C56.8 43.8 45 50.3 32 50.3zM3.2 32C9.6 41.6 20.3 47.3 32 47.3S54.4 41.6 60.8 32C54.4 22.4 43.7 16.7 32 16.7S9.6 22.4 3.2 32zm58-.6z"/>
	</g>
</svg>
	);
};

export default Eye;