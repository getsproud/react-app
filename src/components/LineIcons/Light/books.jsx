import React from 'react';

function Books(props) {
	const title = props.title || "books";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.4 59.7L49.5 2.8c-.2-.8-1-1.3-1.8-1.2L35.5 4V1.5C35.5.7 34.8 0 34 0H5.1c-.9 0-1.5.7-1.5 1.5v60.9c0 .8.7 1.5 1.5 1.5H34c.8 0 1.5-.7 1.5-1.5V16.9l8.8 45.9c.1.7.8 1.2 1.5 1.2h.3l13.2-2.5c.4-.1.7-.3 1-.6.1-.4.2-.8.1-1.2zm-27.9-40H21V3h11.5v16.7zM18 47.5H6.6v-28H18v28zm3-24.8h11.5v17.7H21V22.7zM18 3v13.5H6.6V3H18zM6.6 50.5H18V61H6.6V50.5zM21 61V43.3h11.5V61H21zm25.9-.3L36.6 6.9l10.2-2 10.3 53.9-10.2 1.9z"/>
	</g>
</svg>
	);
};

export default Books;