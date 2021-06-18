import React from 'react';

function Facebook(props) {
	const title = props.title || "facebook";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.2 64h-7.9c-1.8 0-3.4-1.6-3.4-3.6V36h-6.7c-1.8 0-3.4-1.6-3.4-3.6v-7c0-2 1.5-3.6 3.4-3.6h6.6v-6.7c0-9 5.4-15.1 13.4-15.1h6c1.8 0 3.4 1.6 3.4 3.6v8.2c0 2-1.5 3.6-3.4 3.6h-4.7V21.8h6.1c1.1.1 2.1.5 2.7 1.3.7.8.9 1.9.7 3.1L47.8 33c-.2 1.6-1.6 2.9-3.3 2.9h-4.9v24.5c0 2-1.5 3.6-3.4 3.6zm-18-39.1c-.1 0-.4.2-.4.6v7c0 .4.2.6.4.6h8.2c.8 0 1.5.7 1.5 1.5v25.9c0 .4.2.6.4.6h7.9c.1 0 .4-.2.4-.6v-26c0-.8.7-1.5 1.5-1.5h6.4c.2 0 .3-.1.4-.4l1.3-6.9c0-.3 0-.5-.1-.7-.1-.1-.2-.2-.4-.2h-7.5c-.8 0-1.5-.7-1.5-1.5V16c0-1.8.3-3.6 3.5-3.6h4.2c.1 0 .4-.2.4-.6V3.6c0-.4-.2-.6-.4-.6h-6C32.1 3 28 7.8 28 15.1v8.2c0 .8-.7 1.5-1.5 1.5h-8.3z"/>
	</g>
</svg>
	);
};

export default Facebook;