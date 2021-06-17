import React from 'react';

function LeftArrowBox(props) {
	const title = props.title || "left arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.6 30.4s-.1 0 0 0l-32.7.2h-.1l9.1-9.8c.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1L14 29.3l-.1.1c-1.3 1.6-1.3 4 0 5.5l9.9 10.4c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5 0-2.1l-9.2-9.6h.1l32.7-.2c.8 0 1.5-.7 1.5-1.5 0-1-.6-1.6-1.4-1.6z"/>
		<path d="M59.5 0h-55C2.1 0 0 2.1 0 4.5v54.9c0 2.5 2 4.5 4.5 4.5h54.9c2.5 0 4.5-2 4.5-4.5V4.5c.1-2.4-2-4.5-4.4-4.5zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h54.9c.9 0 1.6.7 1.6 1.5v55z"/>
	</g>
</svg>
	);
};

export default LeftArrowBox;