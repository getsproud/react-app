import React from 'react';

function ArrowRight(props) {
	const title = props.title || "arrow right";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.9 29.1L55.3 20c-.5-.6-1.5-.7-2.1-.2-.6.5-.7 1.5-.2 2.1l7.2 8.6H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h58.7L53 42.1c-.5.6-.5 1.6.2 2.1.3.2.6.4 1 .4s.9-.2 1.1-.5L63 35c1.4-1.7 1.4-4.3-.1-5.9z"/>
	</g>
</svg>
	);
};

export default ArrowRight;