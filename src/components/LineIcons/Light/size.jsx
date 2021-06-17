import React from 'react';

function Size(props) {
	const title = props.title || "size";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0c-.8 0-1.5.6-1.5 1.5v1.7H16.4V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6.1H61v1.7c0 .8.7 1.5 1.5 1.5S64 8.6 64 7.8V1.5c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 13.4H15.4c-.8 0-1.5.7-1.5 1.5v47.6c0 .8.7 1.5 1.5 1.5h47.1c.8 0 1.5-.7 1.5-1.5V14.9c0-.8-.7-1.5-1.5-1.5zM61 61H16.9V16.4H61V61z"/>
		<path d="M7.8 16.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H1.5c-.8 0-1.5.6-1.5 1.5s.7 1.5 1.5 1.5h1.7V61H1.5c-.8 0-1.5.7-1.5 1.5S.7 64 1.5 64h6.3c.8 0 1.5-.7 1.5-1.5S8.7 61 7.8 61H6.2V16.5h1.6z"/>
	</g>
</svg>
	);
};

export default Size;