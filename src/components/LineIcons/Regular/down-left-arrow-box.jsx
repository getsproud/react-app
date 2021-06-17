import React from 'react';

function DownLeftArrowBox(props) {
	const title = props.title || "down left arrow box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.7 19L21 40.4l-.3-11.8c0-1-.9-1.8-1.8-1.7-1 0-1.7.8-1.7 1.8l.3 13.5v.2c.2 2 2 3.8 4 4l13.8.5h.1c.9 0 1.7-.7 1.7-1.7s-.7-1.8-1.7-1.8l-12-.4L45 21.6c.7-.7.7-1.8 0-2.5-.5-.8-1.6-.8-2.3-.1z"/>
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
	</g>
</svg>
	);
};

export default DownLeftArrowBox;