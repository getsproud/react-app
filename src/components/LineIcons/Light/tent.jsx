import React from 'react';

function Tent(props) {
	const title = props.title || "tent";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 53.7h-2.3L33.9 18.5l6.6-8.8c.5-.7.4-1.6-.3-2.1s-1.6-.4-2.1.3L32 16l-6-8.1c-.5-.7-1.4-.8-2.1-.3-.7.5-.8 1.4-.3 2.1l6.5 8.8L3.9 53.7H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zM32 21l24.4 32.7H39.5v-6.8c0-4-3.3-7.3-7.3-7.3h-.4c-4 0-7.3 3.3-7.3 7.3v6.8H7.6L32 21zm-4.5 32.7v-6.8c0-2.4 1.9-4.3 4.3-4.3h.4c2.4 0 4.3 1.9 4.3 4.3v6.8h-9z"/>
	</g>
</svg>
	);
};

export default Tent;