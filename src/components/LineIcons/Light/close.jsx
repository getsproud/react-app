import React from 'react';

function Close(props) {
	const title = props.title || "close";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.1 32L63.6 2.6c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L32 29.9 2.6.4C2-.1 1-.1.4.4-.1 1-.1 2 .4 2.6L29.9 32 .4 61.4c-.6.6-.6 1.5 0 2.1.3.4.7.5 1.1.5s.8-.1 1.1-.4L32 34.1l29.4 29.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1L34.1 32z"/>
	</g>
</svg>
	);
};

export default Close;