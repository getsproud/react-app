import React from 'react';

function Triangle(props) {
	const title = props.title || "triangle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.2 57.7H7.8c-3.6 0-6.5-2.9-6.5-6.5V12.8C1.3 10.3 2.7 8 5 6.9c2.3-1.1 4.9-.8 6.9.8l48.4 38.4c2.2 1.8 3 4.6 2.1 7.3-1 2.6-3.4 4.3-6.2 4.3zM7.8 9.7c-.4 0-.9.1-1.3.3-1.1.5-1.7 1.5-1.7 2.7v38.4c0 1.7 1.4 3 3 3h48.4c1.6 0 2.5-1 2.9-2 .3-1 .3-2.4-1-3.4L9.7 10.4c-.6-.4-1.2-.7-1.9-.7z"/>
	</g>
</svg>
	);
};

export default Triangle;