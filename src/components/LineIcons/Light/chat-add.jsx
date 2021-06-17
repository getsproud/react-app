import React from 'react';

function ChatAdd(props) {
	const title = props.title || "chat add";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.9 8.5H4.1c-2.2 0-4 1.8-4 4V51c0 1.5.8 2.9 2.1 3.7.7.4 1.4.6 2.1.6.7 0 1.5-.2 2.1-.6l12.2-7c.2-.1.4-.2.6-.2h40.7c2.2 0 4-1.8 4-4V12.6c.1-2.3-1.7-4.1-4-4.1zm1.1 35c0 .6-.5 1-1 1H19.2c-.7 0-1.5.2-2.1.6l-12.2 7c-.6.3-1.1.1-1.3 0-.1-.1-.6-.4-.6-1.1V12.6c0-.6.5-1 1-1h55.9c.6 0 1 .5 1 1v30.9z"/>
		<path d="M40.3 25.1h-6.8v-6.8c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.8h-6.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.8v6.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.8h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default ChatAdd;