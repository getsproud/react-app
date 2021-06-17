import React from 'react';

function Diamond(props) {
	const title = props.title || "diamond";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.9 23.9L51.4 2.2C50.8.9 49.5 0 48.1 0H15.9c-1.4 0-2.7.8-3.3 2.2L3.1 23.9c-.5 1.2-.4 2.6.4 3.7l25.6 35c.7.9 1.7 1.5 2.9 1.5 1.1 0 2.2-.5 2.9-1.5l25.6-35c.8-1.1.9-2.5.4-3.7zm-2.8 1.9l-25.6 35c-.2.2-.4.2-.5.2-.1 0-.3 0-.5-.2l-25.6-35c-.1-.2-.2-.5-.1-.7l9.5-21.7c.2-.2.4-.4.6-.4h32.2c.2 0 .4.1.5.4l9.5 21.7c.2.2.1.5 0 .7z"/>
	</g>
</svg>
	);
};

export default Diamond;