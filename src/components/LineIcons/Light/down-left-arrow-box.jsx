import React from 'react';

function DownLeftArrowBox(props) {
	const title = props.title || "down left arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.3 18.5l-23 23.2v.1l-.5-13.4c0-.8-.7-1.5-1.6-1.4-.8 0-1.5.7-1.4 1.6l.5 14.3v.1c.2 2 1.9 3.7 3.9 3.9l14.3.3c.8 0 1.5-.6 1.5-1.5 0-.8-.6-1.5-1.5-1.5l-13.3-.3s.1 0 .1-.1l22.9-23.2c.6-.6.6-1.5 0-2.1-.4-.6-1.4-.6-1.9 0z"/>
		<path d="M59.5 0h-55C2.1 0 0 2.1 0 4.5v54.9c0 2.5 2 4.5 4.5 4.5h54.9c2.5 0 4.5-2 4.5-4.5V4.5c.1-2.4-2-4.5-4.4-4.5zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h54.9c.9 0 1.6.7 1.6 1.5v55z"/>
	</g>
</svg>
	);
};

export default DownLeftArrowBox;