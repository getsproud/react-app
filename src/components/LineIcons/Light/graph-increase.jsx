import React from 'react';

function GraphIncrease(props) {
	const title = props.title || "graph increase";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 57.4h-1.6V26.2c0-.8-.7-1.5-1.5-1.5H49.2c-.8 0-1.5.7-1.5 1.5v31.2h-9V32.5c0-.8-.7-1.5-1.5-1.5H26.9c-.8 0-1.5.7-1.5 1.5v24.8h-9V39.9c0-.8-.7-1.5-1.5-1.5H4.6c-.8 0-1.5.7-1.5 1.5v17.5H1.5c-.8 0-1.5.6-1.5 1.5s.7 1.5 1.5 1.5H62.3c.8 0 1.5-.7 1.5-1.5s-.5-1.5-1.3-1.5zm-56.4 0v-16h7.2v16H6.1zm22.3 0V34h7.2v23.3h-7.2zm22.3 0V27.7h7.2v29.7h-7.2z"/>
		<path d="M8.5 24.1c.1 0 .3 0 .4-.1l43.6-13.3-1.4 2.6c-.4.7-.1 1.6.6 2 .2.1.5.2.7.2.5 0 1.1-.3 1.3-.8L56.8 9c.4-.7.1-1.6-.6-2l-5.8-3.1c-.7-.4-1.6-.1-2 .6s-.1 1.6.6 2l2.6 1.4L8 21.1c-.8.2-1.2 1.1-1 1.9.2.6.8 1.1 1.5 1.1z"/>
	</g>
</svg>
	);
};

export default GraphIncrease;