import React from 'react';

function ArrowsExpandDownLeft(props) {
	const title = props.title || "arrows expand down left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.3 29.3L6.4 55.2c-.1-.3-.1-.5-.2-.8L4.8 38.6c-.1-1-.9-1.7-1.9-1.6-1 .1-1.7.9-1.6 1.9l1.4 15.9c.3 3.5 3.1 6.3 6.6 6.6l15.9 1.4h.2c.9 0 1.7-.7 1.7-1.6.1-1-.6-1.8-1.6-1.9L9.7 57.9c-.3 0-.5-.1-.8-.2l25.9-25.9c.7-.7.7-1.8 0-2.5-.7-.6-1.8-.6-2.5 0z"/>
		<path d="M57.9 1.3H45.8C43.2 1.3 41 3.4 41 6v12.1c0 2.6 2.1 4.8 4.8 4.8h12.1c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.2-4.7-4.8-4.7zm1.3 16.8c0 .7-.6 1.3-1.3 1.3H45.8c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h12.1c.7 0 1.3.6 1.3 1.3v12.1z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandDownLeft;