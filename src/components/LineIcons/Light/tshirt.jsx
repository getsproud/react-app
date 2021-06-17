import React from 'react';

function Tshirt(props) {
	const title = props.title || "tshirt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 5.7h-20c-1.3 0-2.4 1-2.5 2.2-.4 3.2-3.4 5.6-7 5.6s-6.7-2.5-7-5.6v-.3c-.3-1.1-1.3-1.8-2.4-1.8H2.5C1.1 5.7 0 6.8 0 8.2l.9 12.9c0 1.3 1.3 2.2 2.5 2.2h5.2l1.9 32.6c0 1.4 1.4 2.3 2.6 2.3h37.7c1.4 0 2.6-1.1 2.6-2.3l1.9-32.7h5.4c1.4 0 2.5-1 2.5-2.2L64 8.3v-.1c0-1.4-1.1-2.5-2.5-2.5zm-1.3 14.6h-5.3c-1.2 0-2.6 1-2.6 2.3l-1.9 32.7H13.5l-1.9-32.6c0-1.3-1.1-2.3-2.5-2.3H3.8L3 8.8h19.1c.8 4.4 5 7.7 9.9 7.7s9.1-3.3 9.9-7.7h19l-.7 11.5z"/>
	</g>
</svg>
	);
};

export default Tshirt;