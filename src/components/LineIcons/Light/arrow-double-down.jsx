import React from 'react';

function ArrowDoubleDown(props) {
	const title = props.title || "arrow double down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.2 57.2l-2.7 2.3V36.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v22.9l-2.7-2.3c-.6-.5-1.6-.5-2.1.1s-.5 1.6.1 2.1l4.5 3.9c.5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6l4.4-3.9c.6-.5.7-1.5.1-2.1-.5-.7-1.4-.7-2-.2z"/>
		<path d="M30.3 28.2c.5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6l4.4-3.9c.6-.5.7-1.5.1-2.1-.5-.6-1.5-.7-2.1-.1l-2.7 2.3V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v22.9l-2.7-2.3c-.6-.5-1.6-.5-2.1.1s-.5 1.6.1 2.1l4.5 3.9z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleDown;