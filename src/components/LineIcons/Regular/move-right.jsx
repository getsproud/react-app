import React from 'react';

function MoveRight(props) {
	const title = props.title || "move right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 27.5L51.4 16c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l9.7 11.5c.1.2.2.3.3.5H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h55.8c-.1.2-.2.3-.3.5l-9.7 11.5c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l9.7-11.5c2.2-2.7 2.2-6.5 0-9.1z"/>
		<path d="M36.2 55H3.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h32.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M3.3 9h32.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H3.3c-1 0-1.8.8-1.8 1.8S2.3 9 3.3 9z"/>
	</g>
</svg>
	);
};

export default MoveRight;