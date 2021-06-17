import React from 'react';

function Ellipse(props) {
	const title = props.title || "ellipse";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 52.8C15 52.8 1.3 43.5 1.3 32S15 11.2 32 11.2 62.8 20.5 62.8 32 49 52.8 32 52.8zm0-38.1C17 14.7 4.8 22.5 4.8 32S17 49.3 32 49.3 59.3 41.5 59.3 32 47 14.7 32 14.7z"/>
	</g>
</svg>
	);
};

export default Ellipse;