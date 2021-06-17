import React from 'react';

function TextFormat(props) {
	const title = props.title || "text format";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3.8 47.3h5.8c1 0 2.1-.7 2.3-1.5l2.7-6.8h20.5l2.5 6.8c.2 1 1.3 1.5 2.3 1.5h6.2c1.9-.2 3.1-1.9 2.3-3.3L31.7 4.3c-.4-1-1.2-1.4-2.1-1.4h-8.8c-.9 0-1.9.4-2.1 1.4l-17 39.8c-.7 1.5.4 3.2 2.1 3.2zM24.9 15l5.9 15.6H19L24.9 15z"/>
		<path d="M48.6 59.6H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h47.1c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M62.5 1.4c-.8 0-1.5.6-1.5 1.5v44.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V2.9c0-.9-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default TextFormat;