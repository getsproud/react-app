import React from 'react';

function MessageForward(props) {
	const title = props.title || "message forward";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 11.1H5.7c-3.1 0-5.7 2.5-5.7 5.7v30.4c0 3.1 2.6 5.7 5.7 5.7h23.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H5.8c-1.5 0-2.7-1.2-2.7-2.7V16.8c0-.3.1-.5.1-.8l25.7 15.4c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9L60.8 16c.1.3.1.5.1.8v12.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.8c0-3.1-2.5-5.7-5.7-5.7zM33.6 28.9c-1 .6-2.2.6-3.1 0L5.9 14.1h52.3L33.6 28.9z"/>
		<path d="M56 34.9c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l4.6 4.5H40.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h18.2L53.9 49c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l7.2-7.1c.3-.3.4-.7.4-1.1s-.2-.8-.4-1.1L56 34.9z"/>
	</g>
</svg>
	);
};

export default MessageForward;