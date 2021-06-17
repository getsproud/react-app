import React from 'react';

function VideoCameraAlt(props) {
	const title = props.title || "video camera alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 20.9c-.4-.3-.9-.3-1.4-.2l-13.2 4.8v-7.7c0-.8-.7-1.5-1.5-1.5H1.5c-.8.1-1.5.7-1.5 1.6v28.3c0 .8.7 1.5 1.5 1.5h45.8c.8 0 1.5-.7 1.5-1.5v-7.7L62 43.2c.2.1.3.1.5.1.3 0 .6-.1.9-.3.4-.3.6-.7.6-1.2V22.2c0-.5-.2-1-.6-1.3zM3 44.6V19.4h42.8v25.3H3zm58-4.9l-12.2-4.4v-6.6L61 24.3v15.4z"/>
	</g>
</svg>
	);
};

export default VideoCameraAlt;