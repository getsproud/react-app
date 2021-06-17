import React from 'react';

function IndentDecrease(props) {
	const title = props.title || "indent decrease";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 3h58c.8 0 1.5-.7 1.5-1.5S61.8 0 61 0H3c-.8 0-1.5.7-1.5 1.5S2.2 3 3 3z"/>
		<path d="M61 61H3c-.8 0-1.5.7-1.5 1.5S2.2 64 3 64h58c.8 0 1.5-.7 1.5-1.5S61.8 61 61 61z"/>
		<path d="M17.2 20.6L4.5 29.9c-.7.4-1.1 1.2-1.1 2s.4 1.5 1 1.9l12.7 9.4c.4.3.9.4 1.4.4.4 0 .7-.1 1.1-.2.8-.4 1.4-1.1 1.5-1.9v-19c0-.9-.5-1.8-1.3-2.2-.8-.3-1.8-.3-2.6.3zm1 19.6L6.9 31.9l11.2-8.2v16.5z"/>
		<path d="M61 15.2H31.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M61 30.5H31.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M61 45.8H31.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default IndentDecrease;