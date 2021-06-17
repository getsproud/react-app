import React from 'react';

function ChevronRight(props) {
	const title = props.title || "chevron right";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.4 29.2L19.1.5c-.6-.6-1.5-.6-2.1-.1-.6.6-.6 1.5-.1 2.1l27.3 28.8c.4.4.4 1 0 1.4L16.9 61.5c-.6.6-.5 1.6.1 2.1.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5l27.3-28.8c1.4-1.5 1.4-3.9 0-5.5z"/>
	</g>
</svg>
	);
};

export default ChevronRight;