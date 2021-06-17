import React from 'react';

function MessageOutgoing(props) {
	const title = props.title || "message outgoing";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 11.1H5.7c-3.1 0-5.7 2.5-5.7 5.7v30.5C0 50.4 2.6 53 5.7 53h29.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H5.7C4.2 50 3 48.8 3 47.3V16.7c0-.9.5-1.8 1.2-2.2l24.7 14.8c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l24.6-14.7c.7.5 1.2 1.3 1.2 2.3v12.4c0 .8.7 1.5 1.5 1.5S64 30 64 29.2V16.8c0-3.2-2.6-5.7-5.7-5.7zM33.6 26.7c-1 .6-2.2.6-3.1 0L9.4 14.1h45.3L33.6 26.7z"/>
		<path d="M60.4 37.5c-.7-.9-1.8-1.5-3-1.5h-8.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h7.8L44 50.3c-.6.6-.7 1.5-.1 2.1.3.3.7.5 1.1.5.4 0 .7-.1 1-.4l12.2-11.1v7.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-8.8c0-.8-.3-1.6-.8-2.2z"/>
	</g>
</svg>
	);
};

export default MessageOutgoing;