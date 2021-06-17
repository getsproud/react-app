import React from 'react';

function ArrowsExpandUpLeft(props) {
	const title = props.title || "arrows expand up left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M8.8 6.2c.2-.1.5-.1.8-.2l15.9-1.4c1-.1 1.7-.9 1.6-1.9-.1-1-.9-1.7-1.9-1.6L9.3 2.5c-3.6.4-6.4 3.2-6.7 6.7L1.3 25.1c-.1 1 .6 1.8 1.6 1.9H3c.9 0 1.7-.7 1.7-1.6L6.1 9.5c0-.3.1-.6.2-.8l26 26c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L8.8 6.2z"/>
		<path d="M58 41.2H45.8c-2.6 0-4.8 2.1-4.8 4.8v12.2c0 2.6 2.1 4.8 4.8 4.8H58c2.6 0 4.8-2.1 4.8-4.8V45.9c0-2.6-2.2-4.7-4.8-4.7zm1.3 16.9c0 .7-.6 1.3-1.3 1.3H45.8c-.7 0-1.3-.6-1.3-1.3V45.9c0-.7.6-1.3 1.3-1.3H58c.7 0 1.3.6 1.3 1.3v12.2z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandUpLeft;