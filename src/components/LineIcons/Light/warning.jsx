import React from 'react';

function Warning(props) {
	const title = props.title || "warning";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.7 51.9L33.2 10.3c-.6-.8-1.9-.8-2.4 0L.3 51.9c-.3.5-.4 1.1-.1 1.6.3.5.8.8 1.3.8h61c.6 0 1.1-.3 1.3-.8.3-.5.2-1.1-.1-1.6zm-59.2-.6L32 13.7l27.5 37.5h-55z"/>
		<path d="M30.5 25.1v11.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V25.1c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.5z"/>
		<circle cx="32" cy="44.5" r="2"/>
	</g>
</svg>
	);
};

export default Warning;