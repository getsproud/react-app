import React from 'react';

function ScrollDown(props) {
	const title = props.title || "scroll down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<circle cx="32" cy="12.6" r="2.8"/>
		<circle cx="32" cy="23.7" r="2.8"/>
		<circle cx="32" cy="34.8" r="2.8"/>
		<path d="M39.3 42.1L32 49.3l-7.2-7.2c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l8.3 8.3c.3.3.7.4 1.1.4s.8-.1 1.1-.4l8.3-8.3c.6-.6.6-1.5 0-2.1-.7-.6-1.7-.6-2.2 0z"/>
		<path d="M36.4 0h-8.8c-9.1 0-16.5 7.4-16.5 16.5v31c0 9.1 7.4 16.5 16.5 16.5h8.8c9.1 0 16.5-7.4 16.5-16.5v-31C52.9 7.4 45.5 0 36.4 0zm13.5 47.5c0 7.4-6.1 13.5-13.5 13.5h-8.8c-7.4 0-13.5-6.1-13.5-13.5v-31c0-7.4 6-13.5 13.5-13.5h8.8c7.4 0 13.5 6.1 13.5 13.5v31z"/>
	</g>
</svg>
	);
};

export default ScrollDown;