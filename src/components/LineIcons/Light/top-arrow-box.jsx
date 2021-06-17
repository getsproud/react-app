import React from 'react';

function TopArrowBox(props) {
	const title = props.title || "top arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M34.7 14c-1.7-1.3-4-1.3-5.6-.1l-10.4 9.9c-.6.6-.6 1.5 0 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l9.6-9.2v.1l.2 32.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5l-.2-32.7v-.1l9.8 9.1c.6.6 1.6.5 2.1-.1.6-.6.5-1.6-.1-2.1L34.7 14z"/>
		<path d="M59.5 0h-55C2 0 0 2 0 4.5v55C0 62 2 64 4.5 64h55c2.5 0 4.5-2 4.5-4.5v-55C64 2 62 0 59.5 0zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h55c.8 0 1.5.7 1.5 1.5v55z"/>
	</g>
</svg>
	);
};

export default TopArrowBox;