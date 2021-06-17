import React from 'react';

function DownArrowBox(props) {
	const title = props.title || "down arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.2 38l-9.6 9.2v-.1l-.2-32.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5l.2 32.7v.1l-9.8-9.1c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1L29.3 50l.1.1c.8.6 1.8.9 2.8.9 1 0 2-.3 2.7-.9l10.4-9.9c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1-.1z"/>
		<path d="M59.5 0h-55C2.1 0 0 2.1 0 4.5v54.9c0 2.5 2 4.5 4.5 4.5h54.9c2.5 0 4.5-2 4.5-4.5V4.5c.1-2.4-2-4.5-4.4-4.5zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h54.9c.9 0 1.6.7 1.6 1.5v55z"/>
	</g>
</svg>
	);
};

export default DownArrowBox;