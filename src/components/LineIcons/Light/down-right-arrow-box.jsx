import React from 'react';

function DownRightArrowBox(props) {
	const title = props.title || "down right arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.7 26.9c-.8 0-1.5.6-1.5 1.5l-.3 13.3s0-.1-.1-.1l-23.3-23c-.5-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l23.3 23h.1l-13.4.5c-.8 0-1.5.7-1.4 1.6 0 .8.7 1.4 1.5 1.4h.1l14.3-.5h.1c2-.2 3.7-1.9 3.9-3.9l.3-14.4c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M59.5 0h-55C2 0 0 2 0 4.5v55C0 62 2 64 4.5 64h55c2.5 0 4.5-2 4.5-4.5v-55C64 2 62 0 59.5 0zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h55c.8 0 1.5.7 1.5 1.5v55z"/>
	</g>
</svg>
	);
};

export default DownRightArrowBox;