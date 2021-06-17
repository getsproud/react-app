import React from 'react';

function FrameExpand(props) {
	const title = props.title || "frame expand";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.1 0H1.5C.7 0 0 .7 0 1.5v16.6c0 .8.7 1.5 1.5 1.5S3 19 3 18.1V3h15.1c.8 0 1.5-.7 1.5-1.5S19 0 18.1 0z"/>
		<path d="M62.5 0H45.9c-.8 0-1.5.7-1.5 1.5S45 3 45.9 3H61v15.1c0 .8.7 1.5 1.5 1.5S64 19 64 18.1V1.5c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 44.4c-.8 0-1.5.7-1.5 1.5V61H45.9c-.8 0-1.5.7-1.5 1.5S45 64 45.9 64h16.6c.8 0 1.5-.7 1.5-1.5V45.9c0-.9-.7-1.5-1.5-1.5z"/>
		<path d="M18.1 61H3V45.9c0-.8-.7-1.5-1.5-1.5S0 45 0 45.9v16.6c0 .8.7 1.5 1.5 1.5h16.6c.8 0 1.5-.7 1.5-1.5S19 61 18.1 61z"/>
	</g>
</svg>
	);
};

export default FrameExpand;