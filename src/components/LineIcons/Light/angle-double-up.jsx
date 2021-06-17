import React from 'react';

function AngleDoubleUp(props) {
	const title = props.title || "angle double up";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M2.6 38.9l29.1-27.5c.1-.1.4-.1.5 0l29.3 27.5c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.6-.1-2.1L34.2 9.2c-1.3-1.2-3.3-1.2-4.6 0L.6 36.7c-.6.6-.6 1.5-.1 2.1.6.6 1.5.7 2.1.1z"/>
		<path d="M34.1 25.6c-1.3-1.2-3.3-1.2-4.6 0L.5 53.1c-.6.6-.6 1.5-.1 2.1.6.6 1.5.6 2.1.1l29.1-27.5c.1-.1.4-.1.5 0l29.3 27.5c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.6.5-1.6-.1-2.1L34.1 25.6z"/>
	</g>
</svg>
	);
};

export default AngleDoubleUp;