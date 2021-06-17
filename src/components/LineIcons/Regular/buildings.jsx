import React from 'react';

function Buildings(props) {
	const title = props.title || "buildings";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 62.7h-53c-2.4 0-4.3-1.9-4.3-4.3V21.5c0-1 .4-2 1-2.8l13.6-16c.8-1 2-1.5 3.2-1.5 1.3 0 2.4.5 3.2 1.5l13.6 16c.7.8 1 1.8 1 2.8v4.9l7-8.6c.8-1 2-1.6 3.3-1.6h.1c1.3 0 2.5.6 3.3 1.7l11.1 14.5c.6.7.9 1.7.9 2.6v23.4c.3 2.4-1.7 4.3-4 4.3zm-21.4-3.5h21.4c.4 0 .8-.3.8-.8V35c0-.2-.1-.3-.2-.5L48 20.1c-.2-.3-.5-.3-.6-.3-.1 0-.4 0-.6.3L37.1 32v27.2zM19.2 4.8c-.1 0-.4 0-.6.3L4.9 21c-.1.1-.2.3-.2.5v36.9c0 .4.3.8.8.8h28V21.5c0-.2-.1-.4-.2-.5L19.7 5c-.2-.2-.4-.2-.5-.2z"/>
	</g>
</svg>
	);
};

export default Buildings;