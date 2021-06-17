import React from 'react';

function TopLeftArrowBox(props) {
	const title = props.title || "top left arrow box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.6 21l11.8-.3c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7l-13.5.3h-.2c-2 .2-3.8 2-4 4l-.5 13.8c0 1 .7 1.8 1.7 1.8h.1c.9 0 1.7-.7 1.7-1.7l.4-12 21.4 21.7c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5L23.6 21z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default TopLeftArrowBox;