import React from 'react';

function MenuAlt2(props) {
	const title = props.title || "menu alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M49.7 47.9H14.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h35.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M14.3 16.1h35.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H14.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default MenuAlt2;