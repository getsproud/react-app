import React from 'react';

function FullScreen(props) {
	const title = props.title || "full screen";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 19.6c.8 0 1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5H45.9c-.8 0-1.5.7-1.5 1.5S45 3 45.9 3h13L32 29.9 5.1 3h13c.8 0 1.5-.7 1.5-1.5S19 0 18.1 0H1.5c-.2 0-.4 0-.5.1C.6.3.3.6.1.9c-.1.2-.1.4-.1.6v16.6c0 .8.7 1.5 1.5 1.5S3 19 3 18.1v-13L29.9 32 3 58.9v-13c0-.8-.7-1.5-1.5-1.5S0 45 0 45.9v16.6c0 .8.7 1.5 1.5 1.5h16.6c.8 0 1.5-.7 1.5-1.5S19 61 18.1 61h-13L32 34.1 58.9 61h-13c-.8 0-1.5.7-1.5 1.5S45 64 45.9 64h16.6c.8 0 1.5-.7 1.5-1.5V45.9c0-.8-.7-1.5-1.5-1.5S61 45 61 45.9v13L34.1 32 61 5.1v13c0 .9.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default FullScreen;