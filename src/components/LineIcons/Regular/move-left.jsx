import React from 'react';

function MoveLeft(props) {
	const title = props.title || "move left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.6 34.2c-.1-.2-.2-.3-.3-.5H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6H5.2c.1-.2.2-.3.3-.5l9.7-11.5c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2L2.9 27.5c-2.2 2.6-2.2 6.4 0 9L12.6 48c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L5.6 34.2z"/>
		<path d="M27.8 9h32.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H27.8c-1 0-1.8.8-1.8 1.8S26.8 9 27.8 9z"/>
		<path d="M60.7 55H27.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h32.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default MoveLeft;