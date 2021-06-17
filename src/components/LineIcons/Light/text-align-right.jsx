import React from 'react';

function TextAlignRight(props) {
	const title = props.title || "text align right";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.1 5.9h44.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H18.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M62.5 21.3H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h52.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 39.7h-36c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h36c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 58.1h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default TextAlignRight;