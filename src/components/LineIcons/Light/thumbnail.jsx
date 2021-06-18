import React from 'react';

function Thumbnail(props) {
	const title = props.title || "thumbnail";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16 0H1.5C.7 0 0 .7 0 1.5V16c0 .8.7 1.5 1.5 1.5H16c.8 0 1.5-.7 1.5-1.5V1.5C17.5.7 16.8 0 16 0zm-1.5 14.5H3V3h11.5v11.5z"/>
		<path d="M39.2 0H24.8c-.8 0-1.5.7-1.5 1.5V16c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V1.5C40.7.7 40.1 0 39.2 0zm-1.5 14.5H26.3V3h11.5v11.5z"/>
		<path d="M62.5 0H48c-.8 0-1.5.7-1.5 1.5V16c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5zM61 14.5H49.5V3H61v11.5z"/>
		<path d="M16 23.3H1.5c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5H16c.8 0 1.5-.7 1.5-1.5V24.8c0-.9-.7-1.5-1.5-1.5zm-1.5 14.4H3V26.3h11.5v11.4z"/>
		<path d="M39.2 23.3H24.8c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V24.8c-.1-.9-.7-1.5-1.6-1.5zm-1.5 14.4H26.3V26.3h11.5v11.4z"/>
		<path d="M62.5 23.3H48c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V24.8c0-.9-.7-1.5-1.5-1.5zM61 37.7H49.5V26.3H61v11.4z"/>
		<path d="M16 46.5H1.5c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5H16c.8 0 1.5-.7 1.5-1.5V48c0-.8-.7-1.5-1.5-1.5zM14.5 61H3V49.5h11.5V61z"/>
		<path d="M39.2 46.5H24.8c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V48c-.1-.8-.7-1.5-1.6-1.5zM37.7 61H26.3V49.5h11.5V61z"/>
		<path d="M62.5 46.5H48c-.8 0-1.5.7-1.5 1.5v14.5c0 .8.7 1.5 1.5 1.5h14.5c.8 0 1.5-.7 1.5-1.5V48c0-.8-.7-1.5-1.5-1.5zM61 61H49.5V49.5H61V61z"/>
	</g>
</svg>
	);
};

export default Thumbnail;