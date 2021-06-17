import React from 'react';

function ShiftLeft(props) {
	const title = props.title || "shift left";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M1.5 2.8C.7 2.8 0 3.4 0 4.3v55.5c0 .8.7 1.5 1.5 1.5S3 60.6 3 59.7V4.3c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 30.5H19.1l5.8-5.8c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L14.3 31c-.3.3-.4.7-.4 1.1 0 .4.2.8.4 1.1l8.5 8.3c.3.3.7.4 1.1.4.4 0 .8-.2 1.1-.4.6-.6.6-1.5 0-2.1l-6-5.9h43.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default ShiftLeft;