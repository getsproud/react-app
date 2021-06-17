import React from 'react';

function Battery(props) {
	const title = props.title || "battery";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 13.9h-3V8c0-1.4-1.1-2.5-2.5-2.5H44.1c-1.4 0-2.5 1.1-2.5 2.5v5.8H22.4V8c0-1.4-1.1-2.5-2.5-2.5H8C6.7 5.5 5.5 6.7 5.5 8v5.8h-3C1.1 13.9 0 15 0 16.4V56c0 1.4 1.1 2.5 2.5 2.5h59c1.4 0 2.5-1.1 2.5-2.5V16.4c0-1.4-1.1-2.5-2.5-2.5zM44.6 8.5h10.9v5.3H44.6V8.5zm-36.1 0h10.9v5.3H8.5V8.5zm52.5 47H3V16.9H61v38.6z"/>
		<path d="M38.4 39.1L29 32l9.5-7.1c.7-.5.8-1.4.3-2.1-.5-.7-1.4-.8-2.1-.3l-11.1 8.3c-.4.3-.6.7-.6 1.2s.2.9.6 1.2l9.5 7.1-9.5 7.1c-.7.5-.8 1.4-.3 2.1.3.4.7.6 1.2.6.3 0 .6-.1.9-.3l11.1-8.3c.4-.3.6-.7.6-1.2s-.3-.9-.7-1.2z"/>
	</g>
</svg>
	);
};

export default Battery;