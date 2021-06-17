import React from 'react';

function BurgerAlt(props) {
	const title = props.title || "burger alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.5.1h-17C10.6.1.1 10.6.1 23.5v2.8c0 .8.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5v-2.8C63.9 10.6 53.4.1 40.5.1zm20.4 24.7H3.1v-1.3c0-11.2 9.1-20.4 20.4-20.4h17.1C51.8 3.1 61 12.2 61 23.5v1.3z"/>
		<path d="M62.4 36.2H1.6c-.8 0-1.5.7-1.5 1.5v2.8c0 12.9 10.5 23.4 23.4 23.4h17.1C53.5 63.9 64 53.4 64 40.5v-2.8c-.1-.8-.7-1.5-1.6-1.5zm-1.5 4.3c0 11.2-9.1 20.4-20.4 20.4h-17c-11.2 0-20.4-9.1-20.4-20.4v-1.3H61v1.3z"/>
	</g>
</svg>
	);
};

export default BurgerAlt;