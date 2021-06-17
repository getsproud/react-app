import React from 'react';

function GraphAlt2(props) {
	const title = props.title || "graph alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 52.9h-1.6v-27c0-.8-.7-1.5-1.5-1.5H49.2c-.8 0-1.5.7-1.5 1.5V53h-9V36.4c0-.8-.7-1.5-1.5-1.5H26.9c-.8 0-1.5.7-1.5 1.5V53h-9V9.6c0-.8-.7-1.5-1.5-1.5H4.6c-.8 0-1.5.7-1.5 1.5V53H1.5c-.8 0-1.5.7-1.5 1.5S.7 56 1.5 56H62.3c.8 0 1.5-.7 1.5-1.5s-.5-1.6-1.3-1.6zm-56.4 0V11.1h7.2V53H6.1zm22.3 0v-15h7.2V53h-7.2zm22.3 0V27.4h7.2V53h-7.2z"/>
	</g>
</svg>
	);
};

export default GraphAlt2;