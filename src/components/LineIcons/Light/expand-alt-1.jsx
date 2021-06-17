import React from 'react';

function ExpandAlt1(props) {
	const title = props.title || "expand alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4.1H1.6C.8.1.1.8.1 1.6v24.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3.1H61V61H39c-.8 0-1.5.7-1.5 1.5S38.2 64 39 64h23.5c.8 0 1.5-.7 1.5-1.5V1.6C63.9.7 63.3.1 62.4.1z"/>
		<path d="M49.5 16.7V27c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V13.1c0-.2 0-.3-.1-.5v-.1c-.1-.2-.2-.3-.3-.4-.3-.3-.7-.4-1-.4h-14c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h10.3L25.7 36.2H1.6c-.8 0-1.5.7-1.5 1.5v24.8c0 .8.7 1.5 1.5 1.5h24.8c.8 0 1.5-.7 1.5-1.5V38.3l21.6-21.6zM24.8 60.9H3.1V39.2h21.8v21.7z"/>
	</g>
</svg>
	);
};

export default ExpandAlt1;