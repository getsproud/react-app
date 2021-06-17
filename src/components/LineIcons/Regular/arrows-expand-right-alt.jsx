import React from 'react';

function ArrowsExpandRightAlt(props) {
	const title = props.title || "arrows expand right alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.6 8.2c-.3-3.1-2.7-5.5-5.8-5.8L42.7 1.3c-1-.1-1.8.6-1.9 1.6-.1 1 .6 1.8 1.6 1.9l13.1 1.1h.1L41 20.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5L58.1 8.4v.1l1.1 13.1c.1.9.8 1.6 1.7 1.6h.2c1-.1 1.7-.9 1.6-1.9L61.6 8.2z"/>
		<path d="M23 41c-.7-.7-1.8-.7-2.5 0L5.9 55.6v-.1L4.7 42.4c-.1-1-.9-1.7-1.9-1.6-1 .1-1.7.9-1.6 1.9l1.1 13.1c.3 3.1 2.7 5.5 5.8 5.8l13.1 1.1h.2c.9 0 1.7-.7 1.7-1.6.1-1-.6-1.8-1.6-1.9l-13-1.1h-.1L23 43.5c.6-.7.6-1.8 0-2.5z"/>
		<path d="M23.1 20.6c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l20.3 20.3c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L23.1 20.6z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandRightAlt;