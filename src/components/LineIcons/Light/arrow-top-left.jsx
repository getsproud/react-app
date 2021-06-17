import React from 'react';

function ArrowTopLeft(props) {
	const title = props.title || "arrow top left";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.5 61.4L5.2 3.1c.2-.1.5-.1.7-.1h20.6c.8 0 1.5-.7 1.5-1.5S27.3 0 26.5 0H5.9C2.7 0 0 2.6 0 5.8v20.5c0 .8.7 1.5 1.5 1.5S3 27.2 3 26.4V5.8c0-.2 0-.4.1-.6l58.3 58.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.5-.6.5-1.6-.1-2.2z"/>
	</g>
</svg>
	);
};

export default ArrowTopLeft;