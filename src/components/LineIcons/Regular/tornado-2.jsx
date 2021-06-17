import React from 'react';

function Tornado2(props) {
	const title = props.title || "tornado 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 1.2H3C2 1.2 1.3 2 1.3 3S2 4.7 3 4.7h58c1 0 1.8-.8 1.8-1.8S62 1.2 61 1.2z"/>
		<path d="M56.8 15.7H12.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h44.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M53.8 30.3H20.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h33.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
		<path d="M43.1 44.8H15.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h27.2c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M39.4 59.3H19.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h19.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Tornado2;