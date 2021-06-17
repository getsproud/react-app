import React from 'react';

function ArrowMinimizeAlt(props) {
	const title = props.title || "arrow minimize alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M29.2 37.4c-.1-1.5-1.3-2.7-2.8-2.8h-8.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H24L.4 61.4c-.6.6-.6 1.5 0 2.1.3.3.7.5 1.1.5.4 0 .8-.1 1.1-.4l23.7-23.8.1 6.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5l-.1-8.3-.1-.3z"/>
		<path d="M63.5.4c-.6-.6-1.5-.6-2.1 0L37.8 24.3v-6.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V26.6c.1 1.5 1.3 2.7 2.8 2.8h8.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H40L63.6 2.6c.5-.6.5-1.6-.1-2.2z"/>
	</g>
</svg>
	);
};

export default ArrowMinimizeAlt;