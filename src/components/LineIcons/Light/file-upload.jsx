import React from 'react';

function FileUpload(props) {
	const title = props.title || "file upload";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 12.3H32.7L28.8 1.1c-.2-.6-.8-1-1.4-1H1.5C.7.1 0 .8 0 1.6v60.8c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V13.8c0-.9-.7-1.5-1.5-1.5zM61 60.9H3V3.1h23.4l3.9 11.1c.2.6.8 1 1.4 1H61v45.7z"/>
		<path d="M25.3 34c-.6.6-.5 1.6.1 2.1.6.6 1.6.5 2.1-.1l3-3.3v14.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V32.9l2.9 3.2c.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5.1-2.1l-5.6-6c-.6-.6-1.6-.6-2.2 0L25.3 34z"/>
	</g>
</svg>
	);
};

export default FileUpload;