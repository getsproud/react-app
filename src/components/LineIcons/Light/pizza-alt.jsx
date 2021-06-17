import React from 'react';

function PizzaAlt(props) {
	const title = props.title || "pizza alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 7.1c0-.1 0-.2-.1-.3-.1-.2-.3-.3-.5-.5C51.4 2.3 42.1 0 32 0 21.9 0 12.6 2.3 6.5 6.4c-.6.4-.8 1.2-.5 1.8l24.6 54.9c.2.5.8.9 1.4.9s1.1-.3 1.4-.9l14.9-33.3c0-.1.1-.1.1-.2L58 8.2c.2-.4.2-.7 0-1.1zM45.7 28.2c0 .1-.1.1-.1.2L32 58.8 14.5 19.9c8.8-2.1 21.3-3.5 35-.1l-3.8 8.4zM50.8 17c-14.7-3.8-28.2-2.1-37.5.1l-4-8.9C14.8 4.9 23.2 3 32 3c8.8 0 17.2 1.9 22.7 5.2L50.8 17z"/>
	</g>
</svg>
	);
};

export default PizzaAlt;