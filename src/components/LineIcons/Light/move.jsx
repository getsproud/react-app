import React from 'react';

function Move(props) {
	const title = props.title || "move";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.9 32c0-.3-.1-.5-.2-.7-.1-.2-.2-.4-.4-.6l-9.2-9.3c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l6.9 6.9H33.5V5l6.9 6.9c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1L33.4.5c-.7-.7-1.9-.7-2.6 0l-9.2 9.3c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l6.9-7v25.5H5.1l6.9-6.9c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L.7 30.7c-.7.7-.7 1.9 0 2.6l9.2 9.3c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1l-6.9-7h25.5V59l-6.9-7c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l9.2 9.3c.1.4.6.6 1.1.6.5 0 1-.2 1.3-.5l9.2-9.3c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L33.5 59V33.5h25.4l-6.9 7c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l9.2-9.3c.2-.2.3-.4.4-.7.1-.2.1-.4.1-.6z"/>
	</g>
</svg>
	);
};

export default Move;