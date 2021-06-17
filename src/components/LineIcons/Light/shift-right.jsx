import React from 'react';

function ShiftRight(props) {
	const title = props.title || "shift right";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 2.8c-.8 0-1.5.7-1.5 1.5v55.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4.3c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M41.2 22.6c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l5.9 5.8H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h43.4l-5.8 5.8c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l8.5-8.4c.3-.3.4-.7.4-1.1 0-.4-.2-.8-.4-1.1l-8.6-8.2z"/>
	</g>
</svg>
	);
};

export default ShiftRight;