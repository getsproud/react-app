import React from 'react';

function Wrench(props) {
	const title = props.title || "wrench";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56 64c-2.1 0-4.1-.8-5.6-2.4L19.1 30.1c-5.2 1.4-10.7-.1-14.6-4C.7 22.2-.8 16.6.6 11.3c.1-.5.5-.9 1.1-1.1s1.1 0 1.5.4l7.1 7.2 5.9-1.6 1.6-6L10.7 3c-.4-.4-.5-.9-.4-1.4.1-.5.5-.9 1.1-1.1 5.1-1.4 10.7.2 14.6 4 3.7 3.7 5.2 9 4.1 14l31.6 31.8c3.1 3.1 3.1 8.2 0 11.3-1.6 1.5-3.6 2.4-5.7 2.4zM19.5 26.9c.4 0 .8.2 1.1.4l31.9 32.1c.9.9 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5 1.9-1.9 1.9-5.1 0-7.1L27.4 20.1c-.4-.4-.6-1-.5-1.5 1.2-4.3 0-8.9-3.1-12-2.4-2.4-5.7-3.7-9.1-3.6l5.7 5.7c.4.4.5.9.4 1.4l-2 7.6c-.1.5-.5.9-1.1 1.1l-7.6 2c-.5.1-1.1 0-1.5-.4L3 14.9c-.1 3.4 1.2 6.7 3.6 9.1 3.3 3.3 8 4.4 12.4 3 .2-.1.3-.1.5-.1z"/>
	</g>
</svg>
	);
};

export default Wrench;