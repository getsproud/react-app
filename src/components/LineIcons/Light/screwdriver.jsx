import React from 'react';

function Screwdriver(props) {
	const title = props.title || "screwdriver";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5H36.3v-9.6c0-.8-.7-1.5-1.5-1.5h-5.5c-.8 0-1.5.7-1.5 1.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-.8-.7-1.5-1.5-1.5H7c-3.9 0-7 3.2-7 7v11.1c0 3.9 3.2 7 7 7h11.1c.8 0 1.5-.7 1.5-1.5 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .8.7 1.5 1.5 1.5h5.5c.8 0 1.5-.7 1.5-1.5v-9.6h26.2c.8 0 1.5-.7 1.5-1.5s-.5-1.4-1.3-1.4zM33.3 41.6h-2.7c-.7-3.2-3.5-5.5-6.9-5.5s-6.2 2.4-6.9 5.5H7c-2.2 0-4-1.8-4-4V26.5c0-2.2 1.8-4 4-4h9.8c.7 3.2 3.5 5.5 6.9 5.5s6.2-2.4 6.9-5.5h2.7v19.1z"/>
	</g>
</svg>
	);
};

export default Screwdriver;