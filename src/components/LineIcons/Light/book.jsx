import React from 'react';

function Book(props) {
	const title = props.title || "book";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.4 11.1h-38-.1-.1c-2.4 0-3.9-1.5-3.9-3.8 0-2.4 1.9-4.3 4.3-4.3h38.6c.8 0 1.5-.7 1.5-1.5S55 0 54.2 0H15.6c-3.8 0-7 3-7.3 6.7v51.5c0 3.2 2.7 5.7 6.1 5.7h39c1.3 0 2.3-1 2.3-2.2V13.3c0-1.2-1-2.2-2.3-2.2zM52.7 61H14.4c-1.7 0-3.1-1.2-3.1-2.7V13c1.1.7 2.4 1.1 3.9 1.1h37.5V61z"/>
		<path d="M23.7 55.7h16.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H23.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M23.7 30.7h16.6c.8 0 1.5-.7 1.5-1.5v-8.3c0-.8-.7-1.5-1.5-1.5H23.7c-.8 0-1.5.7-1.5 1.5v8.3c0 .9.7 1.5 1.5 1.5zm1.5-8.3h13.6v5.3H25.2v-5.3z"/>
	</g>
</svg>
	);
};

export default Book;