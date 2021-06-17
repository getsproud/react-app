import React from 'react';

function ChatMinus(props) {
	const title = props.title || "chat minus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 5.8H4.1c-2.2 0-4 1.8-4 4v44.4c0 1.6.9 3 2.4 3.7.5.2 1.1.3 1.6.3 1 0 2-.4 2.7-1.1l12-11.1c.2-.2.4-.3.7-.3h40.4c2.2 0 4-1.8 4-4V9.8c0-2.2-1.8-4-4-4zm1 35.9c0 .6-.5 1-1 1H19.5c-1 0-2 .4-2.7 1.1L4.8 55c-.4.4-.9.3-1.1.2-.2-.1-.6-.3-.6-1V9.8c0-.6.5-1 1-1h55.8c.6 0 1 .5 1 1v31.9z"/>
		<path d="M39.4 23.1H24.6c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h14.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default ChatMinus;