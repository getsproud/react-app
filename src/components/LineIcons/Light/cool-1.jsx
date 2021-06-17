import React from 'react';

function Cool1(props) {
	const title = props.title || "cool 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50 15.4H14c-.8 0-1.4.8-1.4 1.7v8.7c0 1.9 1.3 3.4 2.9 3.4h10.6c1.5 0 3.1-1.6 3.1-3.6v-4.7h5.5v4.7c0 2 1.2 3.6 2.6 3.6h11.1c1.6 0 2.9-1.5 2.9-3.4v-8.7c.1-1-.5-1.7-1.3-1.7z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
		<path d="M44.8 44.8c-3.5 3.2-8 5-12.8 5-4.8 0-9.3-1.8-12.8-5-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1 4 3.8 9.3 5.8 14.9 5.8 5.5 0 10.8-2.1 14.9-5.8.6-.6.6-1.5.1-2.1-.7-.6-1.7-.6-2.3-.1z"/>
	</g>
</svg>
	);
};

export default Cool1;