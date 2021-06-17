import React from 'react';

function TopRightArrowBox(props) {
	const title = props.title || "top right arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.7 21.1c-.2-2-1.9-3.7-3.9-3.9l-14.3-.3c-.8 0-1.5.6-1.5 1.5 0 .8.6 1.5 1.5 1.5l13.3.3s-.1 0-.1.1L18.6 43.4c-.6.6-.6 1.6 0 2.2.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l22.9-23.3v-.1l.5 13.4c0 .8.7 1.4 1.5 1.4h.1c.8 0 1.5-.7 1.4-1.6l-.5-14.3z"/>
		<path d="M59.5 0h-55C2 0 0 2 0 4.5v54.9C0 62 2 64 4.5 64h54.9c2.5 0 4.5-2 4.5-4.5v-55C64 2 62 0 59.5 0zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h54.9c.9 0 1.6.7 1.6 1.5v55z"/>
	</g>
</svg>
	);
};

export default TopRightArrowBox;