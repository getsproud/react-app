import React from 'react';

function TestTubeAlt(props) {
	const title = props.title || "test tube alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 41.5L25.6 6.9l4.2-4.3c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-5.2 5.4c-.6.6-.6 1.5 0 2.1l24.1 24.6c-2.7 3.1-7.2 6.8-9.8 6.1-4.2-1.2-7.3 1.5-8.9 3.4L8.5 22.3c-.3-.3-.7-.5-1.1-.5s-.8.2-1 .5l-5.2 5.4c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l4.2-4.3 33.8 34.6c2.4 2.5 5.7 3.9 9.1 3.9s6.7-1.4 9.1-3.9c5-5.1 5-13.4 0-18.6zM57.4 58c-1.9 1.9-4.3 3-7 3s-5.1-1.1-7-3L29.9 44.2c1.1-1.3 3.3-3.4 6-2.7 4.7 1.3 10.3-4.2 12.7-6.9l8.7 8.9c4 4.1 4 10.6.1 14.5z"/>
	</g>
</svg>
	);
};

export default TestTubeAlt;