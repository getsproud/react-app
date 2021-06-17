import React from 'react';

function Circle(props) {
	const title = props.title || "circle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8C15 62.8 1.3 49 1.3 32S15 1.3 32 1.3 62.8 15 62.8 32 49 62.8 32 62.8zm0-58C17 4.8 4.8 17 4.8 32S17 59.3 32 59.3 59.3 47 59.3 32 47 4.8 32 4.8z"/>
	</g>
</svg>
	);
};

export default Circle;