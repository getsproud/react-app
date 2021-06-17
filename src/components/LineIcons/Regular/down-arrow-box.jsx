import React from 'react';

function DownArrowBox(props) {
	const title = props.title || "down arrow box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.4 33.4l-8.7 8.1V18.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v23.4l-8.7-8.3c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l9.8 9.3.1.1c.8.6 1.8 1 2.8 1 1 0 2-.3 2.8-1L44.8 36c.7-.7.7-1.8.1-2.5-.7-.7-1.8-.7-2.5-.1z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default DownArrowBox;