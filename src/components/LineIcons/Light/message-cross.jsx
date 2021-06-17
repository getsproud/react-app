import React from 'react';

function MessageCross(props) {
	const title = props.title || "message cross";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.3 11.1H5.7c-3.1 0-5.7 2.6-5.7 5.7v30.4c0 3.1 2.6 5.7 5.7 5.7h29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-29c-1.5 0-2.7-1.2-2.7-2.7V16.8c0-.8.4-1.6 1-2l24.9 15c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l24.9-15c.6.5 1 1.2 1 2.1v9.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.6c0-3.2-2.6-5.8-5.7-5.8zM33.6 27.2c-1 .6-2.2.6-3.1 0L8.7 14.1h46.5L33.6 27.2z"/>
		<path d="M62.1 35.1c-.6-.6-1.5-.6-2.1 0L54.2 41l-5.9-5.9c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1l5.9 5.9-5.9 5.9c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l5.9-5.9 5.9 5.9c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1l-5.9-5.9 5.9-5.9c.3-.6.3-1.5-.3-2.1z"/>
	</g>
</svg>
	);
};

export default MessageCross;