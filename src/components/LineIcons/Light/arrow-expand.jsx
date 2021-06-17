import React from 'react';

function ArrowExpand(props) {
	const title = props.title || "arrow expand";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.2 57.2l-2.7 2.3V36.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v22.9l-2.7-2.3c-.6-.5-1.6-.5-2.1.1s-.5 1.6.1 2.1l4.5 3.9c.5.4 1.1.6 1.7.6.6 0 1.2-.2 1.7-.6l4.4-3.9c.6-.5.7-1.5.1-2.1-.5-.6-1.4-.6-2-.1z"/>
		<path d="M27.8 6.8l2.7-2.3v22.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4.5l2.7 2.3c.3.3.6.4 1 .4s.8-.2 1.1-.5c.5-.6.5-1.6-.1-2.1L33.7.7c-1-.8-2.4-.8-3.4 0l-4.4 3.9c-.6.5-.7 1.5-.1 2.1.5.6 1.4.6 2 .1z"/>
	</g>
</svg>
	);
};

export default ArrowExpand;