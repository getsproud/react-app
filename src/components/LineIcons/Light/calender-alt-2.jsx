import React from 'react';

function CalenderAlt2(props) {
	const title = props.title || "calender alt 2";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 10.3h-5.3V5.7c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4.7H12.9V5.7c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.5v4.7H4.6c-2.5 0-4.5 2-4.5 4.5v40.5c0 2.5 2 4.5 4.5 4.5h54.8c2.5 0 4.5-2 4.5-4.5V14.8c0-2.4-2-4.5-4.5-4.5zm-56.3 17h12.5V40H3.1V27.3zm15.4 0h12V40h-12V27.3zm12 15.7v13.9h-12V43h12zm3 0h12v13.9h-12V43zm0-3V27.3h12V40h-12zm15-12.7H61V40H48.5V27.3zm-43.9-14h5.3v4.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.6h38.3v4.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-4.6h5.3c.8 0 1.5.7 1.5 1.5v9.5H3.1v-9.5c0-.8.6-1.5 1.5-1.5zm-1.5 42V43h12.5v13.9h-11c-.9-.1-1.5-.7-1.5-1.6zm56.3 1.5h-11V43h12.5v12.4c0 .8-.6 1.4-1.5 1.4z"/>
	</g>
</svg>
	);
};

export default CalenderAlt2;