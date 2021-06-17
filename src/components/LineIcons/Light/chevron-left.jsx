import React from 'react';

function ChevronLeft(props) {
	const title = props.title || "chevron left";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M19.8 32.7c-.4-.4-.4-1 0-1.4L47.1 2.5c.5-.6.5-1.5-.1-2.1s-1.6-.5-2.1.1L17.6 29.2c-1.4 1.5-1.4 4 0 5.5l27.3 28.8c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5.1-2.1L19.8 32.7z"/>
	</g>
</svg>
	);
};

export default ChevronLeft;