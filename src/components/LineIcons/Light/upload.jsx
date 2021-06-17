import React from 'react';

function Upload(props) {
	const title = props.title || "upload";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 44.3c-.8 0-1.5.7-1.5 1.5V61H3V45.8c0-.8-.7-1.5-1.5-1.5S0 45 0 45.8v15.7C0 62.9 1.3 64 2.9 64h58.2c1.6 0 2.9-1.1 2.9-2.4V45.8c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M22.9 11.9L30.5 4V45.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V4.2 4l7.7 7.9c.3.3.7.5 1.1.5.4 0 .8-.1 1-.4.6-.6.6-1.5 0-2.1l-8.2-8.5A4.1 4.1 0 0 0 32 0c-1.1 0-2.2.5-3 1.3l-8.3 8.5c-.6.6-.6 1.5 0 2.1s1.6.5 2.2 0z"/>
	</g>
</svg>
	);
};

export default Upload;