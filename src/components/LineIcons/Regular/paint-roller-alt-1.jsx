import React from 'react';

function PaintRollerAlt1(props) {
	const title = props.title || "paint roller alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.1 1.3H11.9C9.8 1.3 8.1 2.9 8.1 5v9.8c0 2.1 1.7 3.8 3.8 3.8h35.9L32.3 32.3c-1 .9-1.6 2.1-1.6 3.4v3.8H29c-2.1 0-3.8 1.7-3.8 3.8V59c0 2.1 1.7 3.8 3.8 3.8h6.8c2.1 0 3.8-1.7 3.8-3.8V43.3c0-2.1-1.7-3.8-3.8-3.8h-1.7v-3.8c0-.3.1-.6.4-.8l18.6-16.6c1.5-.5 2.6-1.9 2.6-3.6V5c.2-2.1-1.5-3.7-3.6-3.7zm-16 42V59c0 .1-.1.3-.3.3H29c-.1 0-.3-.1-.3-.3V43.3c0-.1.1-.3.3-.3h6.8c.2.1.3.2.3.3zM11.6 14.8V5c0-.1.1-.3.3-.3h40.2c.1 0 .3.1.3.3v9.8c0 .1-.1.2-.2.2H11.9c-.2 0-.3-.1-.3-.2z"/>
	</g>
</svg>
	);
};

export default PaintRollerAlt1;