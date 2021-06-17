import React from 'react';

function Pencil(props) {
	const title = props.title || "pencil";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.2 12C59.7 8.3 56 4.5 52.2.9c-.5-.5-1.2-.9-2-.9-.7 0-1.4.3-2 .8L6.5 42.4.1 61.7c-.2.5-.1 1.1.2 1.5.2.4.7.8 1.5.8H2l19.5-6.5L63.1 16c.5-.5.8-1.2.8-1.9s-.2-1.6-.7-2.1zM19.9 54.8L3.7 60.3 9.1 44 40 13.3 50.8 24 19.9 54.8zm33-32.9L42.1 11.1l8-8c3.7 3.5 7.2 7.2 10.7 10.8l-7.9 8z"/>
	</g>
</svg>
	);
};

export default Pencil;