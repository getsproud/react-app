import React from 'react';

function House(props) {
	const title = props.title || "house";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 27.8c-.8 0-1.5.7-1.5 1.5V61H8.6V29.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v33.2c0 .8.7 1.5 1.5 1.5h49.8c.8 0 1.5-.7 1.5-1.5V29.3c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M63.3 19.9L32.8.2c-.5-.3-1.1-.3-1.6 0L.7 19.9c-.7.5-.9 1.4-.5 2.1.4.7 1.4.9 2.1.4L32 3.3l29.7 19.1c.3.2.5.2.8.2.5 0 1-.2 1.3-.7.4-.6.2-1.5-.5-2z"/>
	</g>
</svg>
	);
};

export default House;