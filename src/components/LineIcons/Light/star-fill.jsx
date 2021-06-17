import React from 'react';

function StarFill(props) {
	const title = props.title || "star fill";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 23.1l-20-3.1-9-19C32.8-.3 31-.3 30.4 1l-9 19.1-20 3c-1.4.2-2 2.1-.9 3.1L15 41.1 11.6 62c-.2 1.4 1.2 2.6 2.5 1.8L32 54l18 9.7c1.2.7 2.7-.4 2.5-1.8L49 41.1l14.4-14.9c1.1-1 .6-2.9-.9-3.1z"/>
	</g>
</svg>
	);
};

export default StarFill;