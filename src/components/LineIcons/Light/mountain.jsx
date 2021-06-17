import React from 'react';

function Mountain(props) {
	const title = props.title || "mountain";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 57.1L33.3 4.4c-.3-.5-.8-.7-1.3-.7s-1 .3-1.3.7L.2 57.1c-.4.7-.2 1.6.5 2 .7.4 1.6.2 2-.5l19-32.6 4.1 4.9c.3.3.7.5 1.2.5s.9-.2 1.2-.5l3.9-4.8 3.9 4.8c.3.3.7.5 1.2.5s.9-.2 1.2-.5l4.1-4.9 18.9 32.6c.3.5.8.7 1.3.7.3 0 .5-.1.8-.2.5-.4.7-1.3.3-2zM37.1 27.6l-3.9-4.8c-.3-.3-.7-.5-1.2-.5-.4 0-.9.2-1.2.5l-3.9 4.8-3.6-4.4 8.7-15 8.7 15.1-3.6 4.3z"/>
	</g>
</svg>
	);
};

export default Mountain;