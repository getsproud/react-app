import React from 'react';

function LinkAlt1(props) {
	const title = props.title || "link alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0c-4.6 0-8.4 3.8-8.4 8.4v12.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V8.4C26.6 5.5 29 3 32 3s5.4 2.4 5.4 5.4v12.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V8.4C40.4 3.8 36.6 0 32 0z"/>
		<path d="M33.5 36.7v-9.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v9.5c0 .8.7 1.5 1.5 1.5s1.5-.6 1.5-1.5z"/>
		<path d="M38.9 41.2c-.8 0-1.5.7-1.5 1.5v12.9c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4V42.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v12.9c0 4.6 3.8 8.4 8.4 8.4s8.4-3.8 8.4-8.4V42.7c0-.9-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default LinkAlt1;