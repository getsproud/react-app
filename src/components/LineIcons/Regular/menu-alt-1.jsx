import React from 'react';

function MenuAlt1(props) {
	const title = props.title || "menu alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M12.9 30.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h38.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H12.9z"/>
		<path d="M61 47.9H3c-1 0-1.8.8-1.8 1.8S2 51.4 3 51.4h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M3 16.1h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H3c-1 0-1.8.8-1.8 1.8S2 16.1 3 16.1z"/>
	</g>
</svg>
	);
};

export default MenuAlt1;