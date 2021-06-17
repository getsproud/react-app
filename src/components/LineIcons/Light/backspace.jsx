import React from 'react';

function Backspace(props) {
	const title = props.title || "backspace";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 13.1H20c-.4 0-.8.1-1 .4L.5 30.9c-.3.3-.5.7-.5 1.1s.2.8.5 1.1L19 50.5c.3.3.6.4 1 .4h42.5c.8 0 1.5-.7 1.5-1.5V14.6c0-.8-.7-1.5-1.5-1.5zM61 47.9H20.6L3.7 32l16.9-15.9H61v31.8z"/>
		<path d="M29.1 40.1c.3.3.7.4 1.1.4s.8-.1 1.1-.4l6-6 6 6c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-6-6 6-6c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-6 6-6-6c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l6 6-6 6c-.8.6-.8 1.5-.2 2.1z"/>
	</g>
</svg>
	);
};

export default Backspace;