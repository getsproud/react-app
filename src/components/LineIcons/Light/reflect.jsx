import React from 'react';

function Reflect(props) {
	const title = props.title || "reflect";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M23.2 15.5H1.5c-.8 0-1.5.7-1.5 1.5v30c0 .8.7 1.5 1.5 1.5h21.7c.8 0 1.5-.7 1.5-1.5V17c0-.8-.7-1.5-1.5-1.5zm-1.5 30H3v-27h18.7v27z"/>
		<path d="M62.5 15.5H40.8c-.8 0-1.5.7-1.5 1.5v30c0 .8.7 1.5 1.5 1.5h21.7c.8 0 1.5-.7 1.5-1.5V17c0-.8-.7-1.5-1.5-1.5zm-1.5 30H42.3v-27H61v27z"/>
		<path d="M32 4.7c-.8 0-1.5.7-1.5 1.5v4.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6.2c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M32 18.9c-.8 0-1.5.7-1.5 1.5v7.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.8c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M32 35.5c-.8 0-1.5.7-1.5 1.5v7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M32 52.2c-.8 0-1.5.7-1.5 1.5v4.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.1c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Reflect;