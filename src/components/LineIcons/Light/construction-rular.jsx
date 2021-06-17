import React from 'react';

function ConstructionRular(props) {
	const title = props.title || "construction rular";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 38.8H19.6V5.3c0-1.4-1.1-2.5-2.5-2.5H2.5C1.1 2.8 0 3.9 0 5.3v53.5c0 1.4 1.1 2.5 2.5 2.5h57.2c2.4 0 4.3-1.9 4.3-4.3V43.1c0-2.4-1.9-4.3-4.3-4.3zM12.6 58.2H3V5.8h13.6v52.5h-4zM61 57c0 .7-.6 1.3-1.3 1.3h-4v-9.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v9.6h-5.3v-6.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8H39V49.7c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.4V58.3h-5.3v-6.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8h-8.1V41.8h40.1c.7 0 1.3.6 1.3 1.3V57z"/>
	</g>
</svg>
	);
};

export default ConstructionRular;