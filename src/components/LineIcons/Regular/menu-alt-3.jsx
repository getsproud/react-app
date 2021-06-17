import React from 'react';

function MenuAlt3(props) {
	const title = props.title || "menu alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M32.7 47.9H3c-1 0-1.8.8-1.8 1.8S2 51.4 3 51.4h29.7c1 0 1.7-.8 1.7-1.8s-.7-1.7-1.7-1.7z"/>
		<path d="M31.3 16.1H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H31.3c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
	</g>
</svg>
	);
};

export default MenuAlt3;