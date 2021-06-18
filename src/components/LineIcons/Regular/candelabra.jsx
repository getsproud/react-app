import React from 'react';

function Candelabra(props) {
	const title = props.title || "candelabra";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 12c.8-1 1.3-2.3 1.3-3.7 0-2.9-3.6-5.9-4.7-6.7-.6-.5-1.5-.5-2.1 0-1.1.8-4.7 3.8-4.7 6.7 0 1.4.5 2.7 1.3 3.7-2 .6-3.4 2.4-3.4 4.5v17.9c0 2.6 2.1 4.8 4.8 4.8h1.7c-.4 1.8-1.1 3.6-3.3 5.4-2.2 1.9-5 2-5 2H33.8v-7.4h1.4c2.6 0 4.8-2.1 4.8-4.8V16.5c0-2.2-1.5-4-3.4-4.5.8-1 1.3-2.3 1.3-3.7 0-2.9-3.6-5.9-4.7-6.7-.6-.5-1.5-.5-2.1 0-1.1.8-4.7 3.8-4.7 6.7 0 1.4.5 2.7 1.3 3.7-1.9.6-3.4 2.4-3.4 4.5v17.9c0 2.6 2.1 4.8 4.8 4.8h1.4v7.4H20.1s-2.8-.1-5.4-2.7c-1.4-1.3-2.1-3.3-2.5-4.7h1.3c2.6 0 4.8-2.1 4.8-4.8V16.5c0-2.1-1.4-3.9-3.4-4.5.8-1 1.3-2.3 1.3-3.7 0-2.9-3.6-5.9-4.7-6.7-.6-.5-1.5-.5-2.1 0-1.4.8-5.1 3.8-5.1 6.7 0 1.4.5 2.7 1.3 3.7-2 .6-3.4 2.4-3.4 4.5v17.9c0 2.6 2.1 4.8 4.8 4.8h1.3c.4 1.6 1.4 4.9 3.7 7.2 3.5 3.4 7.3 3.7 7.7 3.7h10.5v9.2H18.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H33.8V50h10.5c.2 0 4.1-.2 7.2-2.8 3.1-2.7 3.9-5.4 4.5-7.7l.1-.4h1c2.6 0 4.8-2.1 4.8-4.8V16.5c-.1-2.2-1.6-4-3.5-4.5zM32 5.3c1.3 1.2 2.3 2.5 2.3 3 0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-.6 1-1.9 2.3-3zm-4.3 29.1V16.5c0-.7.6-1.3 1.3-1.3h6.3c.7 0 1.3.6 1.3 1.3v17.9c0 .7-.6 1.3-1.3 1.3H29c-.8-.1-1.3-.6-1.3-1.3zM10.1 5.3c1.3 1.2 2.3 2.5 2.3 3 0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-.6 1-1.9 2.3-3zM5.7 34.4V16.5c0-.7.6-1.3 1.3-1.3h6.3c.7 0 1.3.6 1.3 1.3v17.9c0 .7-.6 1.3-1.3 1.3H7c-.7-.1-1.3-.6-1.3-1.3zM53.9 5.3c1.3 1.2 2.3 2.5 2.3 3 0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-.6 1-1.9 2.3-3zm4.4 29.1c0 .7-.6 1.3-1.3 1.3h-6.3c-.7 0-1.3-.6-1.3-1.3V16.5c0-.7.6-1.3 1.3-1.3H57c.7 0 1.3.6 1.3 1.3v17.9z"/>
	</g>
</svg>
	);
};

export default Candelabra;