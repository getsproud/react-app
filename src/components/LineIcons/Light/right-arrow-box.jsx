import React from 'react';

function RightArrowBox(props) {
	const title = props.title || "right arrow box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M40.2 18.8c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l9.2 9.6h-.1l-32.7.2c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5l32.7-.2h.1l-9.1 9.8c-.6.6-.5 1.6.1 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5L50 34.7l.1-.1c1.3-1.6 1.3-4 0-5.5l-9.9-10.3z"/>
		<path d="M59.5 0h-55C2 0 0 2 0 4.5v55C0 62 2 64 4.5 64h55c2.5 0 4.5-2 4.5-4.5v-55C64 2 62 0 59.5 0zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-55C3 3.7 3.7 3 4.5 3h55c.8 0 1.5.7 1.5 1.5v55z"/>
	</g>
</svg>
	);
};

export default RightArrowBox;