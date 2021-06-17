import React from 'react';

function DropperAlt1(props) {
	const title = props.title || "dropper alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.5 21.4l2.1-2.1c2.1-2.1 3.3-5 3.3-8s-1.2-5.8-3.3-8c-2.1-2.1-5-3.3-8-3.3s-5.8 1.2-8 3.3l-2.1 2.1-4.1-4.1c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l4.1 4.1-26.7 26.8c-.2.2-.4.5-.4.8l-3 16.5-9.8 9.8c-.6.6-.6 1.5 0 2.1.3.3.6.5 1 .5s.8-.1 1.1-.4l9.8-9.8 16.5-3c.3-.1.6-.2.8-.4l26.8-26.8 4.1 4.1c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-4.3-4.2zM46.8 5.5C48.4 3.9 50.5 3 52.7 3s4.3.9 5.9 2.4C60.1 7 61 9.1 61 11.3s-.9 4.3-2.4 5.9l-2.1 2.1L44.7 7.6l2.1-2.1zM27.9 47.8l-14.4 2.6L16.1 36 42.6 9.7l11.7 11.7-26.4 26.4z"/>
	</g>
</svg>
	);
};

export default DropperAlt1;