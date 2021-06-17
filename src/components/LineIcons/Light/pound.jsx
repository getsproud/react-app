import React from 'react';

function Pound(props) {
	const title = props.title || "pound";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 61H18.9c4.6-3.1 7.6-8.5 7.6-14.5V36h29c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5h-29V19.9C26.6 10.6 34.1 3 43.3 3c4.3 0 8.4 1.7 11.6 4.7.6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1C53.3 2 48.4 0 43.3 0 32.4 0 23.6 8.9 23.6 19.9V33h-18c-.8 0-1.5.7-1.5 1.5S4.8 36 5.6 36h17.9v10.5c0 8-6.4 14.5-14.4 14.5H2.9c-.8 0-1.5.7-1.5 1.5S2 64 2.9 64H61.1c.8 0 1.5-.7 1.5-1.5S62 61 61.1 61z"/>
	</g>
</svg>
	);
};

export default Pound;