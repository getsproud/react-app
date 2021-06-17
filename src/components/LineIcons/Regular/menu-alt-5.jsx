import React from 'react';

function MenuAlt5(props) {
	const title = props.title || "menu alt 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 41.9H3c-1 0-1.8.8-1.8 1.8S2 45.4 3 45.4h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M3 22.1h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H3c-1 0-1.8.8-1.8 1.8S2 22.1 3 22.1z"/>
	</g>
</svg>
	);
};

export default MenuAlt5;