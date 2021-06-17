import React from 'react';

function ServiceAlt(props) {
	const title = props.title || "service alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 44.9h-4.4C55.8 32.7 46 22.9 33.8 22v-4.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V22c-12.2.9-22 10.7-22.8 22.9H3c-1 0-1.8.8-1.8 1.8S2 48.4 3 48.4h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM32 25.4c11.1 0 20.2 8.6 21.1 19.4H10.9c.9-10.8 10-19.4 21.1-19.4z"/>
	</g>
</svg>
	);
};

export default ServiceAlt;