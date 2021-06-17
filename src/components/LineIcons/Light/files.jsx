import React from 'react';

function Files(props) {
	const title = props.title || "files";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.8 0H30c-1.2 0-2.2 1-2.2 2.2v14.4H2.2c-1.2 0-2.2 1-2.2 2.2v27.5c0 1.1.5 2.3 1.3 3.1L15 62.8c.8.8 1.9 1.2 3 1.2h16c1.2 0 2.2-1 2.2-2.2V39.9l6.4 6.2c.8.8 1.9 1.2 3 1.2h16.1c1.2 0 2.2-1 2.2-2.2V2.2C64 1 63 0 61.8 0zM3.5 47.4h13.1v12.8L3.5 47.4zM33.3 61H19.6V46.6c0-1.2-1-2.2-2.2-2.2H3V19.6h30.3V61zm3-27.5h5.3v7.4l-5.3-5.2v-2.2zM61 44.4H45.7c-.3 0-.6-.1-.9-.4l-.2-.2V32.7c0-1.2-1-2.2-2.2-2.2h-6.1V18.9c0-1.2-1-2.2-2.2-2.2h-3.3V3H61v41.4z"/>
	</g>
</svg>
	);
};

export default Files;