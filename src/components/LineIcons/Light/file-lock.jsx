import React from 'react';

function FileLock(props) {
	const title = props.title || "file lock";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 12.2H32.7L28.8 1c-.2-.6-.8-1-1.4-1H1.5C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V13.7c0-.8-.7-1.5-1.5-1.5zM61 61H3V3h23.4l3.9 11.2c.2.6.8 1 1.4 1H61V61z"/>
		<path d="M26.3 31.1V34h-1c-2.5 0-4.5 2-4.5 4.5v8.8c0 2.5 2 4.5 4.5 4.5h13.4c2.5 0 4.5-2 4.5-4.5v-8.8c0-2.5-2-4.5-4.5-4.5h-1v-2.9c0-3.3-2.5-5.9-5.7-5.9-3.1 0-5.7 2.7-5.7 5.9zm13.9 7.5v8.8c0 .8-.7 1.5-1.5 1.5H25.3c-.8 0-1.5-.7-1.5-1.5v-8.8c0-.8.7-1.5 1.5-1.5h13.4c.8 0 1.5.6 1.5 1.5zM32 28.2c1.5 0 2.7 1.3 2.7 2.9V34h-5.3v-2.9c-.1-1.6 1.1-2.9 2.6-2.9z"/>
	</g>
</svg>
	);
};

export default FileLock;