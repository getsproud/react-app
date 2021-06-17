import React from 'react';

function Text(props) {
	const title = props.title || "text";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v8.7c0 .8.7 1.5 1.5 1.5S3 11.1 3 10.2V3h27.5v58h-12c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h26.9c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5h-12V3H61v7.2c0 .8.7 1.5 1.5 1.5S64 11 64 10.2V1.5c0-.8-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Text;