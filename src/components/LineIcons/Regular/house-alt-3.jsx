import React from 'react';

function HouseAlt3(props) {
	const title = props.title || "house alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 50.2h-3.1V15.9c0-3.1-2.5-5.6-5.6-5.6H24.9c-3.1 0-5.6 2.5-5.6 5.6v9.9H11c-2.6 0-4.8 2.1-4.8 4.8v19.6H3c-1 0-1.8.8-1.8 1.8S2 53.7 3 53.7h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-40 0H9.8V30.6c0-.7.6-1.3 1.3-1.3h23.2c.7 0 1.3.6 1.3 1.3v19.6H21zm18 0V30.6c0-2.6-2.1-4.8-4.8-4.8H22.8v-9.9c0-1.2 1-2.1 2.1-2.1h27.3c1.2 0 2.1 1 2.1 2.1v34.3H39z"/>
	</g>
</svg>
	);
};

export default HouseAlt3;