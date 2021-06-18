import React from 'react';

function Spinner1(props) {
	const title = props.title || "spinner 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0c-.8 0-1.5.7-1.5 1.5v21.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V1.5C33.5.7 32.8 0 32 0z"/>
		<path d="M32 39.3c-.8 0-1.5.7-1.5 1.5v21.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V40.8c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M24.7 32c0-.8-.7-1.5-1.5-1.5H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21.7c.8 0 1.5-.7 1.5-1.5z"/>
		<path d="M62.5 30.5H40.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h21.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M38.2 27.3c.4 0 .8-.1 1.1-.4l15.4-15.4c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L37.2 24.7c-.6.6-.6 1.5 0 2.1.2.3.6.5 1 .5z"/>
		<path d="M24.7 37.2L9.4 52.5c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4L27 39.2c.6-.6.6-1.5 0-2.1s-1.7-.5-2.3.1z"/>
		<path d="M39.3 37.2c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l15.4 15.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1L39.3 37.2z"/>
		<path d="M11.5 9.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l15.4 15.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1L11.5 9.4z"/>
	</g>
</svg>
	);
};

export default Spinner1;