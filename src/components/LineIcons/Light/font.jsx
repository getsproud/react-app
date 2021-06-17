import React from 'react';

function Font(props) {
	const title = props.title || "font";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v60.9c0 .9.7 1.6 1.5 1.6h60.9c.8 0 1.5-.7 1.5-1.5v-61C64 .7 63.3 0 62.5 0zM61 61H3V3h58v58z"/>
		<path d="M21.2 22.7h9.3v20.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V22.7h9.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H21.2c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Font;