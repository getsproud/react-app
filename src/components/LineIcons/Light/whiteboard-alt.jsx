import React from 'react';

function WhiteboardAlt(props) {
	const title = props.title || "whiteboard alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v30c0 .8.7 1.5 1.5 1.5H31v9.7c-.1.1-.2.1-.2.2L12.3 61.4c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4L31 46.9v13.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V47l15.5 16.6c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5.1-2.1L34.3 42.9c-.1-.1-.2-.1-.3-.2V33h28.5c.8 0 1.5-.7 1.5-1.5v-30c0-.8-.7-1.5-1.5-1.5zM61 30H3V3h58v27z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt;