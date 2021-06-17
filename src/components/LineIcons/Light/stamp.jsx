import React from 'react';

function Stamp(props) {
	const title = props.title || "stamp";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.2 36.2h-9l1.4-27.6c.1-2.3-.7-4.6-2.3-6.2C35.9.8 34 0 32 0s-3.9.8-5.4 2.3c-1.6 1.7-2.4 4-2.3 6.3l1.4 27.6h-8.9c-6.2 0-11.2 5.5-11.2 12.2v5.1c0 1.2.9 2.2 2.1 2.2h.7v4c0 2.3 1.9 4.3 4.3 4.3h38.8c2.4 0 4.3-1.9 4.3-4.3v-4h.7c1.2 0 2.1-.9 2.1-2.2v-5.1c-.2-6.7-5.2-12.2-11.4-12.2zM27.3 8.5c-.1-1.5.5-3 1.5-4.1.8-.9 2-1.4 3.2-1.4 1.2 0 2.3.5 3.2 1.4 1 1.1 1.5 2.5 1.5 4l-1.4 27.8h-6.6L27.3 8.5zm-18.7 40c0-5.1 3.7-9.2 8.2-9.2h30.4c4.5 0 8.2 4.1 8.2 9.2v4.3H8.6v-4.3zm44.1 11.2c0 .7-.6 1.3-1.3 1.3H12.6c-.7 0-1.3-.6-1.3-1.3v-4h41.3v4z"/>
	</g>
</svg>
	);
};

export default Stamp;