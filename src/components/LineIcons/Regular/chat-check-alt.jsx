import React from 'react';

function ChatCheckAlt(props) {
	const title = props.title || "chat check alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.1 6.9H6.9c-3.1 0-5.7 2.5-5.7 5.7v28.9c0 3.1 2.5 5.7 5.7 5.7h15.2l8.4 9.3c.3.4.8.6 1.3.6s1-.2 1.3-.6l8.6-9.4H57c3.1 0 5.7-2.5 5.7-5.7V12.6c.1-3.1-2.5-5.7-5.6-5.7zm2.2 34.6c0 1.2-1 2.2-2.2 2.2H41c-.5 0-1 .2-1.3.6l-7.9 8.5-7.7-8.5c-.3-.4-.8-.6-1.3-.6h-16c-1.2 0-2.2-1-2.2-2.2V12.6c0-1.2 1-2.2 2.2-2.2H57c1.2 0 2.2 1 2.2 2.2v28.9z"/>
		<path d="M39.2 20.9L28.6 31.6l-3.8-3.8c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5 5c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l11.9-11.9c.7-.7.7-1.8 0-2.5-.6-.7-1.7-.7-2.4 0z"/>
	</g>
</svg>
	);
};

export default ChatCheckAlt;