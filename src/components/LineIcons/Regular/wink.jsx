import React from 'react';

function Wink(props) {
	const title = props.title || "wink";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.8 25.8h9.4c.8 0 1.4-.5 1.7-1.2.2-.7 0-1.5-.6-2L20.5 16c-.8-.6-1.9-.4-2.5.4-.6.8-.4 1.9.4 2.5l4.6 3.4h-4.2c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M45.6 35.5H18.4c-.9 0-1.7.4-2.3 1.1-.5.7-.8 1.5-.6 2.4C17 46.8 23.9 52.6 32 52.6S47 46.9 48.5 39c.2-.8-.1-1.7-.6-2.4s-1.4-1.1-2.3-1.1zM32 49.1c-6.1 0-11.4-4.2-12.9-10.1H45c-1.6 5.9-6.9 10.1-13 10.1z"/>
		<path d="M41.2 26.8c2 0 3.5-1.6 3.5-3.5 0-2-1.6-3.5-3.5-3.5-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5z"/>
	</g>
</svg>
	);
};

export default Wink;