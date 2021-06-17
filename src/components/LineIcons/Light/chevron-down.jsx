import React from 'react';

function ChevronDown(props) {
	const title = props.title || "chevron down";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 17c-.6-.6-1.5-.6-2.1-.1L32.7 44.2c-.4.4-1 .4-1.4 0L2.5 16.9c-.6-.5-1.5-.5-2.1.1-.6.6-.5 1.6.1 2.1l28.8 27.3c.8.7 1.8 1.1 2.8 1.1 1 0 2-.4 2.8-1.1l28.8-27.3c.4-.5.5-1.5-.1-2.1z"/>
	</g>
</svg>
	);
};

export default ChevronDown;