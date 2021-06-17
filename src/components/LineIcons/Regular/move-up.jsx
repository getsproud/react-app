import React from 'react';

function MoveUp(props) {
	const title = props.title || "move up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.5 2.9c-2.6-2.2-6.4-2.2-9 0L16 12.6c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l11.5-9.7c.2-.1.3-.2.5-.3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.2c.2.1.3.2.5.3l11.5 9.7c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5L36.5 2.9z"/>
		<path d="M56.8 26c-1 0-1.8.8-1.8 1.8v32.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.8c-.1-1-.9-1.8-1.8-1.8z"/>
		<path d="M7.2 26c-1 0-1.8.8-1.8 1.8v32.9c0 1 .8 1.8 1.8 1.8S9 61.7 9 60.7V27.8c0-1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default MoveUp;