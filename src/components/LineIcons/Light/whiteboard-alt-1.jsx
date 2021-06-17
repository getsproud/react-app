import React from 'react';

function WhiteboardAlt1(props) {
	const title = props.title || "whiteboard alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 5.2h-29V2.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v2.6h-29C.7 5.2 0 5.8 0 6.7v30c0 .8.7 1.5 1.5 1.5H31v9.7L12.6 60.2c-.7.5-.9 1.4-.4 2.1.3.4.8.7 1.2.7.3 0 .6-.1.8-.3L31 51.4v8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.9l15.7 11.2c.3.2.6.3.9.3.5 0 .9-.2 1.2-.6.5-.7.3-1.6-.4-2.1L34.1 47.8v-9.7h28.5c.8 0 1.5-.7 1.5-1.5v-30c-.1-.8-.8-1.4-1.6-1.4zm-1.5 30H3v-27h58v27z"/>
	</g>
</svg>
	);
};

export default WhiteboardAlt1;