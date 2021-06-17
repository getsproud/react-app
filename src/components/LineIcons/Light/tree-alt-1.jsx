import React from 'react';

function TreeAlt1(props) {
	const title = props.title || "tree alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.7 20.7C52.7 9.3 43.4 0 32 0 20.6 0 11.3 9.3 11.3 20.7c0 10.9 8.5 19.8 19.2 20.6v21.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V41.3c10.7-.8 19.2-9.7 19.2-20.6zM33.5 38.3v-4.5l6.3-6.3c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-4.2 4.2v-6.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.3l-4.2-4.2c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l6.3 6.3v4.5c-9-.8-16.2-8.4-16.2-17.6C14.3 11 22.3 3 32 3s17.7 7.9 17.7 17.7c0 9.3-7.2 16.9-16.2 17.6z"/>
	</g>
</svg>
	);
};

export default TreeAlt1;