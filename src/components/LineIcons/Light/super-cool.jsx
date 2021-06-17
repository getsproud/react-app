import React from 'react';

function SuperCool(props) {
	const title = props.title || "super cool";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50 15.4H14c-.8 0-1.4.8-1.4 1.7v8.7c0 1.9 1.3 3.4 2.9 3.4h10.6c1.5 0 3.1-1.6 3.1-3.6v-4.7h5.5v4.7c0 2 1.2 3.6 2.6 3.6h11.1c1.6 0 2.9-1.5 2.9-3.4v-8.7c.1-1-.6-1.7-1.3-1.7z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32 32-14.3 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M46.3 36H17.7c-.8 0-1.6.4-2.1 1s-.7 1.4-.6 2.2c1.6 8.1 8.7 14 17 14s15.5-5.9 17-14c.2-.8-.1-1.6-.6-2.2-.5-.6-1.2-1-2.1-1zM32 50.3c-6.7 0-12.6-4.7-14-11.2h28c-1.4 6.5-7.3 11.2-14 11.2z"/>
	</g>
</svg>
	);
};

export default SuperCool;