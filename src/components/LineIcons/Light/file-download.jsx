import React from 'react';

function FileDownload(props) {
	const title = props.title || "file download";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 12.2H32.7L28.8 1c-.2-.6-.8-1-1.4-1H1.5C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V13.7c0-.8-.7-1.5-1.5-1.5zM61 61H3V3h23.4l3.9 11.2c.2.6.8 1 1.4 1H61V61z"/>
		<path d="M30.5 29v16.2L27 41.7c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l6.1 5.9c.3.3.7.4 1 .4s.8-.1 1-.4l6.1-5.9c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0l-3.5 3.4V29c0-.8-.7-1.5-1.5-1.5s-1.5.6-1.5 1.5z"/>
	</g>
</svg>
	);
};

export default FileDownload;