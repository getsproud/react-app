import React from 'react';

function CameraAlt(props) {
	const title = props.title || "camera alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 16.6v-3c0-.6-.4-1-1-1h-9.1c-.6 0-1 .4-1 1v3H39v-1.3c0-3.9-3.2-7-7-7H20.9c-3.9 0-7 3.2-7 7v1.3H7c-3.9 0-7 3.2-7 7v25c0 3.9 3.2 7 7 7h50c3.9 0 7-3.2 7-7v-25c0-3.8-3.2-7-7-7zm4 32c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-25c0-2.2 1.8-4 4-4h8.3c.8 0 1.5-.7 1.5-1.5v-2.8c0-2.2 1.8-4 4-4H32c2.2 0 4 1.8 4 4v2.8c0 .8.7 1.5 1.5 1.5H57c2.2 0 4 1.8 4 4v25z"/>
		<path d="M27.8 22.2c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2c6.2 0 11.2-5 11.2-11.2s-5-11.2-11.2-11.2zm0 19.4c-4.5 0-8.2-3.7-8.2-8.2 0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2c0 4.5-3.6 8.2-8.2 8.2z"/>
	</g>
</svg>
	);
};

export default CameraAlt;