import React from 'react';

function ArrowLeft(props) {
	const title = props.title || "arrow left";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5H3.8l7.2-8.6c.5-.6.5-1.6-.2-2.1-.6-.5-1.6-.5-2.1.2L1 29.1C-.4 30.8-.4 33.3 1 35l7.7 9c.3.4.7.5 1.1.5.3 0 .7-.1 1-.4.6-.5.7-1.5.2-2.1l-7.2-8.6h58.7c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"/>
	</g>
</svg>
	);
};

export default ArrowLeft;