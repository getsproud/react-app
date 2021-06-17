import React from 'react';

function CargoMover(props) {
	const title = props.title || "cargo mover";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 36.8h-8.2v-7.3c0-2.3-1.6-4.2-3.8-4.6V13c0-2.6-2.1-4.8-4.8-4.8H33.4c-2.6 0-4.8 2.1-4.8 4.8v7.8h-10v-5.2c0-2.6-2.1-4.8-4.8-4.8H6c-2.6 0-4.8 2.1-4.8 4.8V38.8c0 .1 0 .2.1.3v.1l4.4 12.5c.9 2.5 3.3 4.2 5.9 4.2h30.8c2 0 3.9-.9 5-2.5L57 40.5h4c1 0 1.8-.8 1.8-1.8s-.8-1.9-1.8-1.9zm-11.7 0H32.1v-8.6H48c.7 0 1.3.6 1.3 1.3v7.3zM32.1 13c0-.7.6-1.3 1.3-1.3h10.9c.7 0 1.3.6 1.3 1.3v11.7H32.1V13zm-3.5 11.3v12.4h-10V24.4h10zM4.8 28.2h10.3v8.6H4.8v-8.6zm0-12.6c0-.7.6-1.3 1.3-1.3H14c.7 0 1.3.6 1.3 1.3v9.1H4.8v-9.1zm39.9 35.6c-.5.7-1.3 1.1-2.2 1.1H11.6c-1.2 0-2.2-.7-2.6-1.8L5.5 40.3h47.2l-8 10.9z"/>
	</g>
</svg>
	);
};

export default CargoMover;