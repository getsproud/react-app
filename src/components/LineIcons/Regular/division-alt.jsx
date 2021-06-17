import React from 'react';

function DivisionAlt(props) {
	const title = props.title || "division alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.9 3 33.9h58c1 0 1.8-.8 1.8-1.8 0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M32 21.2c5.4 0 9.7-4.4 9.7-9.7S37.4 1.8 32 1.8s-9.7 4.4-9.7 9.7 4.3 9.7 9.7 9.7zm0-15.9c3.4 0 6.2 2.8 6.2 6.2 0 3.4-2.8 6.2-6.2 6.2s-6.2-2.8-6.2-6.2c0-3.4 2.8-6.2 6.2-6.2z"/>
		<path d="M32 42.8c-5.4 0-9.7 4.4-9.7 9.7s4.4 9.7 9.7 9.7 9.7-4.4 9.7-9.7-4.3-9.7-9.7-9.7zm0 15.9c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z"/>
	</g>
</svg>
	);
};

export default DivisionAlt;