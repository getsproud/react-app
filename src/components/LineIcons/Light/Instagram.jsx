import React from 'react';

function Instagram(props) {
	const title = props.title || "Instagram";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 17.3c-8.1 0-14.7 6.6-14.7 14.7S23.9 46.7 32 46.7 46.6 40.1 46.6 32 40.1 17.3 32 17.3zm0 26.4c-6.5 0-11.7-5.3-11.7-11.7S25.5 20.3 32 20.3c6.4 0 11.6 5.3 11.6 11.7S38.4 43.7 32 43.7z"/>
		<path d="M48.4 9.2c-2.4 0-4.4 2-4.4 4.4 0 2.4 1.9 4.4 4.4 4.4 2.4 0 4.3-2 4.3-4.4 0-2.4-1.9-4.4-4.3-4.4z"/>
		<path d="M48.2 0H15.8C7.1 0 0 7.1 0 15.8v32.6C0 57 7.1 64 15.8 64h32.6C57 64 64 56.9 64 48.2V15.8C64 7.1 56.9 0 48.2 0zM61 48.2c0 7-5.7 12.8-12.7 12.8H15.8C8.7 61 3 55.3 3 48.3V15.8C3 8.7 8.7 3 15.8 3h32.5C55.3 3 61 8.7 61 15.8v32.4z"/>
	</g>
</svg>
	);
};

export default Instagram;