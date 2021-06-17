import React from 'react';

function Film(props) {
	const title = props.title || "film";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M21.4 12.4c-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2s8.2-3.7 8.2-8.2c-.1-4.6-3.7-8.2-8.2-8.2zm0 13.3c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c-.1 2.9-2.4 5.2-5.2 5.2z"/>
		<path d="M42.6 28.7c4.5 0 8.2-3.7 8.2-8.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2.1 4.5 3.7 8.2 8.2 8.2zm0-13.3c2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2.1-2.9 2.4-5.2 5.2-5.2z"/>
		<path d="M21.4 35.3c-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2s8.2-3.7 8.2-8.2c-.1-4.5-3.7-8.2-8.2-8.2zm0 13.3c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c-.1 2.9-2.4 5.2-5.2 5.2z"/>
		<path d="M42.6 51.6c4.5 0 8.2-3.7 8.2-8.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2.1 4.6 3.7 8.2 8.2 8.2zm0-13.3c2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2.1-2.9 2.4-5.2 5.2-5.2z"/>
		<path d="M62.5 61h-17C56.4 55.9 64 44.8 64 32 64 14.4 49.6 0 32 0S0 14.4 0 32s14.4 32 32 32h30.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zM3 32C3 16 16 3 32 3s29 13 29 29-13 29-29 29S3 48 3 32z"/>
	</g>
</svg>
	);
};

export default Film;