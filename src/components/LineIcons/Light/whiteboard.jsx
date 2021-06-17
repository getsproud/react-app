import React from 'react';

function Whiteboard(props) {
	const title = props.title || "whiteboard";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 9.3H44.9l-1.1-8C43.7.5 43-.1 42.1 0c-.8.1-1.4.9-1.3 1.7l1 7.6H22.1l1-7.6c.1-.8-.5-1.6-1.3-1.7-.8-.1-1.6.5-1.7 1.3l-1.1 8H1.5C.7 9.3 0 10 0 10.8v30c0 .8.7 1.5 1.5 1.5h13.1l-2.7 20c-.1.8.5 1.6 1.3 1.7h.2c.7 0 1.4-.5 1.5-1.3l2.8-20.4h28.7l2.8 20.4c.1.8.7 1.3 1.5 1.3h.2c.8-.1 1.4-.9 1.3-1.7l-2.7-20h13.1c.8 0 1.5-.7 1.5-1.5v-30c-.1-.8-.8-1.5-1.6-1.5zm-1.5 30H3v-27h58v27z"/>
	</g>
</svg>
	);
};

export default Whiteboard;