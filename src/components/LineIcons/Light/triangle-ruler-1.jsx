import React from 'react';

function TriangleRuler1(props) {
	const title = props.title || "triangle ruler 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M2.6 10.2c-.5-.5-1.1-.6-1.7-.4-.5.3-.9.8-.9 1.4v41.5c0 .8.7 1.5 1.5 1.5H43c.6 0 1.2-.4 1.4-.9s.1-1.2-.3-1.6L2.6 10.2zM3 51.3V14.9l36.4 36.4H3z"/>
		<path d="M8.7 46.7h16c.6 0 1.2-.4 1.4-.9.2-.6.1-1.2-.3-1.6l-16-16c-.4-.4-1.1-.6-1.6-.3-.6.2-.9.8-.9 1.4v16c-.1.8.6 1.4 1.4 1.4zm1.5-13.9l10.9 10.9H10.2V32.8z"/>
		<path d="M62.5 9.9H49.1c-.8 0-1.5.7-1.5 1.5v41.3c0 .8.7 1.5 1.5 1.5h13.4c.8 0 1.5-.7 1.5-1.5V11.4c0-.8-.7-1.5-1.5-1.5zM50.6 51.3V12.9H61v5.8h-4.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61v4.9h-2.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61v4.9h-4.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61v4.9h-2.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H61v5.8H50.6z"/>
	</g>
</svg>
	);
};

export default TriangleRuler1;