import React from 'react';

function CrossCircle(props) {
	const title = props.title || "cross circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M41.4 22.6c-.6-.6-1.5-.6-2.1 0L32 29.9l-7.3-7.3c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7.3 7.3-7.3 7.3c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l7.3-7.3 7.3 7.3c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1L34.1 32l7.3-7.3c.6-.6.6-1.5 0-2.1z"/>
	</g>
</svg>
	);
};

export default CrossCircle;