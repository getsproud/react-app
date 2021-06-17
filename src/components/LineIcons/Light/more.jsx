import React from 'react';

function More(props) {
	const title = props.title || "more";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 39c-3.9 0-7-3.2-7-7 0-3.9 3.2-7 7-7 3.9 0 7 3.2 7 7 0 3.9-3.1 7-7 7zm0-11c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
		<path d="M57 39c-3.9 0-7-3.2-7-7 0-3.9 3.2-7 7-7s7 3.2 7 7c0 3.9-3.2 7-7 7zm0-11c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"/>
		<path d="M7 39c-3.9 0-7-3.2-7-7 0-3.9 3.2-7 7-7s7 3.2 7 7c.1 3.9-3.1 7-7 7zm0-11c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4c.1-2.2-1.7-4-4-4z"/>
	</g>
</svg>
	);
};

export default More;