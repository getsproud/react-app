import React from 'react';

function BridgeAlt1(props) {
	const title = props.title || "bridge alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 38.7h-7.4c-8.2 0-17-15.7-19.9-22.2v-5.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5.4C27.2 23 18.5 38.7 10.2 38.7H3c-1 0-1.8.8-1.8 1.8S2 42.2 3 42.2h6.5v9h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H13v-9h38v9h-.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.7v-9H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zm-15.9 0H33.8V24.2c2.6 4.6 6.6 10.7 11.3 14.5zM30.3 24.2v14.5H18.9c4.7-3.8 8.7-9.9 11.4-14.5z"/>
	</g>
</svg>
	);
};

export default BridgeAlt1;