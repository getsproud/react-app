import React from 'react';

function MessageCheck(props) {
	const title = props.title || "message check";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 11.1H5.8c-3.1 0-5.7 2.5-5.7 5.6v30.6c0 3.1 2.6 5.6 5.7 5.6h23.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H5.8c-1.5 0-2.7-1.2-2.7-2.6V16.7c0-.8.4-1.5 1-2l24.8 14.8c1 .6 2 .9 3.1.9s2.2-.3 3.1-.9l24.8-14.8c.6.5 1 1.2 1 2v12.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.7c0-3.1-2.5-5.6-5.7-5.6zM33.6 26.9c-1 .6-2.2.6-3.1 0L9 14.1h46L33.6 26.9z"/>
		<path d="M59.4 37.2L46.9 49.5c-.5.5-1.2.5-1.7 0l-7.4-7.3c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l7.4 7.3c.8.8 1.9 1.2 2.9 1.2s2.1-.4 2.9-1.2l12.5-12.3c.6-.6.6-1.5 0-2.1-.5-.5-1.4-.6-2 0z"/>
	</g>
</svg>
	);
};

export default MessageCheck;