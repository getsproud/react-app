import React from 'react';

function LayoutAlt1(props) {
	const title = props.title || "layout alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v19.5c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zm2.3 25.2c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v19.5z"/>
		<path d="M21.6 39.6H7c-3.2 0-5.8 2.6-5.8 5.8V57c0 3.2 2.6 5.8 5.8 5.8h14.6c3.2 0 5.8-2.6 5.8-5.8V45.3c0-3.1-2.6-5.7-5.8-5.7zM23.9 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V45.3c0-1.2 1-2.3 2.3-2.3h14.6c1.2 0 2.3 1 2.3 2.3V57z"/>
		<path d="M57 39.6H42.4c-3.2 0-5.8 2.6-5.8 5.8V57c0 3.2 2.6 5.8 5.8 5.8H57c3.2 0 5.8-2.6 5.8-5.8V45.3c0-3.1-2.6-5.7-5.8-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H42.4c-1.2 0-2.3-1-2.3-2.3V45.3c0-1.2 1-2.3 2.3-2.3H57c1.2 0 2.3 1 2.3 2.3V57z"/>
	</g>
</svg>
	);
};

export default LayoutAlt1;