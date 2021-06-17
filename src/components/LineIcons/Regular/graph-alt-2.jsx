import React from 'react';

function GraphAlt2(props) {
	const title = props.title || "graph alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 51.6h-1.2V28.2c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v23.4h-7.9V38.1c0-2.1-1.7-3.8-3.8-3.8h-5.7c-2.1 0-3.8 1.7-3.8 3.8v13.4h-7.9V12.7c0-2.1-1.7-3.8-3.8-3.8H7.9c-2.1 0-3.8 1.7-3.8 3.8v38.9H3c-1 0-1.8.8-1.8 1.8S2 55.1 3 55.1h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-53.3 0V12.7c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v38.9H7.7zm21.2 0V38.1c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v13.4h-6.3zm21.2 0V28.2c0-.1.1-.3.3-.3h5.7c.1 0 .3.1.3.3v23.4h-6.3z"/>
	</g>
</svg>
	);
};

export default GraphAlt2;