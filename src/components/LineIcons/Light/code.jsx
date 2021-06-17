import React from 'react';

function Code(props) {
	const title = props.title || "code";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M17.9 14.6c.5-.6.5-1.6-.2-2.1-.6-.5-1.6-.5-2.1.2L.9 29.6C-.3 31-.3 33.1.9 34.5l14.7 16.9c.3.3.7.5 1.1.5.3 0 .7-.1 1-.4.6-.5.7-1.5.2-2.1L3.2 32.5c-.2-.2-.2-.7 0-.9l14.7-17z"/>
		<path d="M63.1 29.6l-14.7-17c-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1l14.7 16.9c.2.2.2.7 0 .9L46.1 49.4c-.5.6-.5 1.6.2 2.1.3.2.6.4 1 .4s.8-.2 1.1-.5l14.7-16.9c1.2-1.4 1.2-3.6 0-4.9z"/>
		<path d="M38.2 13.1c-.8-.3-1.6.2-1.9 1L24.9 49c-.3.8.2 1.6 1 1.9.1.1.2.1.4.1.6 0 1.2-.4 1.4-1l11.4-35c.3-.8-.1-1.7-.9-1.9z"/>
	</g>
</svg>
	);
};

export default Code;