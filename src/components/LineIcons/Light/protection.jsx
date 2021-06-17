import React from 'react';

function Protection(props) {
	const title = props.title || "protection";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.3 6.2L33.1.2c-.7-.2-1.5-.2-2.2 0l-22.2 6c-1.9.5-3.2 2.2-3.2 4.1v16.2c0 16.4 9.8 31 24.8 37.1.5.2 1.1.3 1.6.3.6 0 1.1-.1 1.6-.3 15.2-6 25-20.6 25-37.1V10.4c0-1.9-1.3-3.7-3.2-4.2zm.2 20.3c0 15-9.2 28.9-23 34.4-.3.1-.7.1-1 0-14-5.7-23-19.1-23-34.4V10.4c0-.6.4-1.1.9-1.3L31.7 3h.6l22.2 6.1c.6.2.9.7.9 1.3v16.1z"/>
		<path d="M44.9 22.5L29.2 35.6l-7.4-6.2c-.6-.5-1.6-.4-2.1.2-.5.6-.4 1.6.2 2.1l8.3 7c.3.2.6.4 1 .4.3 0 .7-.1 1-.4l16.6-14c.6-.5.7-1.5.2-2.1-.5-.6-1.5-.7-2.1-.1z"/>
	</g>
</svg>
	);
};

export default Protection;