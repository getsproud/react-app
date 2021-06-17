import React from 'react';

function Poligon(props) {
	const title = props.title || "poligon";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.1 59.5H18.9c-1.7 0-3.3-.9-4.1-2.4L1.6 34.4a5.1 5.1 0 0 1 0-4.8L14.8 6.9c.8-1.5 2.4-2.4 4.1-2.4h26.2c1.7 0 3.3.9 4.1 2.4l13.1 22.7c.8 1.5.8 3.3 0 4.8L49.2 57.1c-.8 1.5-2.4 2.4-4.1 2.4zM18.9 8c-.4 0-.9.2-1.1.6L4.7 31.4c-.2.4-.2.9 0 1.3l13.1 22.7c.2.4.6.6 1.1.6h26.2c.4 0 .9-.2 1.1-.6l13.1-22.7c.2-.4.2-.9 0-1.3L46.2 8.6c-.2-.3-.6-.6-1.1-.6H18.9z"/>
	</g>
</svg>
	);
};

export default Poligon;