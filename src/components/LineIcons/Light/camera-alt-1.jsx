import React from 'react';

function CameraAlt1(props) {
	const title = props.title || "camera alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 16.6h-8.8L46 12.2c-1.2-2.4-3.6-3.9-6.3-3.9H24.3c-2.7 0-5.1 1.5-6.3 3.9l-2.2 4.4H7c-3.9 0-7 3.2-7 7v25c0 3.9 3.2 7 7 7h50c3.9 0 7-3.2 7-7v-25c0-3.8-3.2-7-7-7zm4 32c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4v-25c0-2.2 1.8-4 4-4h9.7c.6 0 1.1-.3 1.3-.8l2.6-5.3c.7-1.4 2.1-2.2 3.6-2.2h15.3c1.5 0 2.9.9 3.6 2.2l2.6 5.3c.3.5.8.8 1.3.8h10c2.2 0 4 1.8 4 4v25z"/>
		<path d="M32 25c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8S37.4 25 32 25zm0 16.6c-3.8 0-6.8-3.1-6.8-6.8 0-3.8 3.1-6.8 6.8-6.8 3.8 0 6.8 3.1 6.8 6.8 0 3.7-3 6.8-6.8 6.8z"/>
		<path d="M15.4 25H9.8c-.8 0-1.5.7-1.5 1.5S9 28 9.8 28h5.5c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.4-1.5z"/>
	</g>
</svg>
	);
};

export default CameraAlt1;