import React from 'react';

function ArrowsScrollH(props) {
	const title = props.title || "arrows scroll h";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.9 36.6c-2.2-2.7-2.2-6.5 0-9.2L62.3 7.8c.7-.7.6-1.8-.2-2.4-.7-.6-1.8-.5-2.5.2L43.2 25.2c-3.3 4-3.3 9.7 0 13.7l16.4 19.6c.4.3.9.5 1.4.5.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5L45.9 36.6z"/>
		<path d="M4.3 5.6c-.6-.7-1.7-.8-2.4-.2-.8.6-.9 1.7-.2 2.4l16.4 19.6c2.2 2.7 2.2 6.5 0 9.2L1.7 56.2c-.7.7-.6 1.8.2 2.4.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l16.4-19.6c3.3-4 3.3-9.7 0-13.7L4.3 5.6z"/>
	</g>
</svg>
	);
};

export default ArrowsScrollH;