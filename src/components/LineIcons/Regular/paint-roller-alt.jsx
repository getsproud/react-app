import React from 'react';

function PaintRollerAlt(props) {
	const title = props.title || "paint roller alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.8 9.1h-2.2V5c0-2.1-1.7-3.8-3.8-3.8H5C2.9 1.2 1.3 2.9 1.3 5v11.8c0 2.1 1.7 3.8 3.8 3.8h40.8c2.1 0 3.8-1.7 3.8-3.8v-4.2h2.2c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5H32c-2.4 0-4.4 2-4.4 4.4v6.2h-1.5c-2.1 0-3.8 1.7-3.8 3.8v17c0 2.1 1.7 3.8 3.8 3.8h6.5c2.1 0 3.8-1.7 3.8-3.8V41.9c0-2.1-1.7-3.8-3.8-3.8h-1.5V32c0-.5.4-.9.9-.9h19.8c6.1 0 11-4.9 11-11s-5-11-11-11zm-5.7 7.7c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3V5c0-.1.1-.3.3-.3h40.8c.1 0 .3.1.3.3v11.8zM32.9 41.9V59c0 .1-.1.3-.3.3h-6.5c-.1 0-.3-.1-.3-.3V41.9c0-.1.1-.3.3-.3h6.5c.2.1.3.2.3.3z"/>
	</g>
</svg>
	);
};

export default PaintRollerAlt;