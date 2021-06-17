import React from 'react';

function ArrowsHorizontal(props) {
	const title = props.title || "arrows horizontal";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.9 29.1L55.3 20c-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1l7.2 8.6H3.8l7.2-8.6c.5-.6.5-1.6-.2-2.1-.6-.5-1.6-.5-2.1.2L1 29.1C-.4 30.8-.4 33.3 1 35l7.7 9c.3.4.7.5 1.1.5.3 0 .7-.1 1-.4.6-.5.7-1.5.2-2.1l-7.2-8.6h56.5L53 42.1c-.5.6-.5 1.6.2 2.1.3.2.6.4 1 .4s.9-.2 1.1-.5l7.6-9.1c1.5-1.7 1.5-4.3 0-5.9z"/>
	</g>
</svg>
	);
};

export default ArrowsHorizontal;