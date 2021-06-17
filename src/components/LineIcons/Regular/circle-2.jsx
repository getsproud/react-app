import React from 'react';

function Circle2(props) {
	const title = props.title || "circle 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M32 17c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15zm0 26.5c-6.4 0-11.5-5.2-11.5-11.5S25.6 20.5 32 20.5 43.5 25.6 43.5 32 38.4 43.5 32 43.5z"/>
	</g>
</svg>
	);
};

export default Circle2;