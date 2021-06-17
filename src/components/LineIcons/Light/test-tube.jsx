import React from 'react';

function TestTube(props) {
	const title = props.title || "test tube";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.4 0h-7.7c-.8 0-1.5.7-1.5 1.5V51c0 5.5-4.6 9.9-10.3 9.9S21.6 56.4 21.6 51V1.5C21.7.7 21 0 20.2 0h-7.7c-.8 0-1.5.7-1.5 1.5S11.7 3 12.6 3h6.2v48c0 7.1 6 12.9 13.3 12.9S45.4 58.1 45.4 51V3h6.2c.8 0 1.5-.7 1.5-1.5S52.3 0 51.4 0z"/>
	</g>
</svg>
	);
};

export default TestTube;