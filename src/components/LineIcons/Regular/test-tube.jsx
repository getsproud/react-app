import React from 'react';

function TestTube(props) {
	const title = props.title || "test tube";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.8c-7.1 0-13-5.7-13-12.6V4.8h-5.5c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h7.3c1 0 1.8.8 1.8 1.8v47.1c0 5 4.2 9.1 9.5 9.1s9.5-4.1 9.5-9.1V3c0-1 .8-1.8 1.8-1.8h7.3c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8H45v45.4c0 6.9-5.8 12.6-13 12.6z"/>
	</g>
</svg>
	);
};

export default TestTube;