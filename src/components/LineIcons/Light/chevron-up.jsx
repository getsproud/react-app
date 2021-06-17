import React from 'react';

function ChevronUp(props) {
	const title = props.title || "chevron up";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.5 44.9L34.8 17.6c-1.5-1.4-4-1.4-5.5 0L.5 44.9c-.6.6-.6 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l28.8-27.3c.4-.4 1-.4 1.4 0l28.8 27.3c.6.6 1.6.5 2.1-.1.6-.6.5-1.6-.1-2.1z"/>
	</g>
</svg>
	);
};

export default ChevronUp;