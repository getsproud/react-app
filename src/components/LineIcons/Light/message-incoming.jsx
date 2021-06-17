import React from 'react';

function MessageIncoming(props) {
	const title = props.title || "message incoming";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 10.6H5.7c-3.1 0-5.7 2.5-5.7 5.6v30.6c0 3.1 2.6 5.6 5.7 5.6h29.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H5.7c-1.5 0-2.7-1.2-2.7-2.6V16.2c0-.7.3-1.3.7-1.7l25.2 14.9c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l25.2-14.9c.4.5.7 1.1.7 1.7v12.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.2c0-3.1-2.6-5.6-5.7-5.6zM33.6 26.8c-1 .6-2.2.6-3.2 0L8.1 13.6h47.7L33.6 26.8z"/>
		<path d="M56.4 38.4l-10 9.8v-7.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v8.9c0 2 1.7 3.7 3.8 3.7H56c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-7.6l10.1-9.9c.6-.6.6-1.5 0-2.1-.5-.7-1.5-.7-2.1-.1z"/>
	</g>
</svg>
	);
};

export default MessageIncoming;