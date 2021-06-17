import React from 'react';

function BurgerAlt1(props) {
	const title = props.title || "burger alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.5 0h-29C7.9 0 0 7.9 0 17.5v4.6c0 .8.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5v-4.6C64 7.9 56.1 0 46.5 0zM61 20.7H3v-3.1C3 9.5 9.5 3 17.5 3h28.9C54.5 3 61 9.5 61 17.5v3.2z"/>
		<path d="M62.5 40.3h-61c-.8 0-1.5.7-1.5 1.5v4.6C0 56.1 7.9 64 17.5 64h28.9C56.1 64 64 56.1 64 46.5v-4.6c0-.9-.7-1.6-1.5-1.6zM61 46.5c0 8-6.5 14.5-14.5 14.5h-29C9.5 61 3 54.5 3 46.5v-3.1h58v3.1z"/>
		<path d="M62.5 30.5h-61c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h60.9c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5z"/>
	</g>
</svg>
	);
};

export default BurgerAlt1;