import React from 'react';

function NetworkAlt(props) {
	const title = props.title || "network alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 47.6h-.6L37.5 14.3c1.7-1.5 2.7-3.7 2.7-6.1C40.2 3.7 36.5 0 32 0c-4.5 0-8.2 3.7-8.2 8.2 0 2.4 1 4.6 2.7 6.1L8.9 47.6h-.6c-4.5 0-8.2 3.7-8.2 8.2S3.7 64 8.2 64c3.9 0 7.1-2.7 8-6.3h31.6c.9 3.6 4.1 6.3 8 6.3 4.5 0 8.2-3.7 8.2-8.2s-3.7-8.2-8.2-8.2zM32 3c2.9 0 5.2 2.3 5.2 5.2s-2.3 5.2-5.2 5.2c-2.9 0-5.2-2.3-5.2-5.2S29.1 3 32 3zM8.2 61C5.3 61 3 58.7 3 55.8c0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c0 2.9-2.3 5.2-5.2 5.2zm39.4-6.3H16.4c-.4-2.8-2.1-5.1-4.5-6.3L29 15.9c.9.4 1.9.6 3 .6 1 0 2-.2 3-.6l17.2 32.5c-2.4 1.2-4.2 3.5-4.6 6.3zm8.2 6.3c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2z"/>
	</g>
</svg>
	);
};

export default NetworkAlt;