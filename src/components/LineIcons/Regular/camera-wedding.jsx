import React from 'react';

function CameraWedding(props) {
	const title = props.title || "camera wedding";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 19.6c-1.1-1.1-2.7-1.8-4.3-1.8h-7c-.7 0-1.2-.5-1.2-1.2v-4.4c0-1.5-.7-3.3-3.8-3.3H18.9c-2.9 0-3.5 1.8-3.5 3.3v4.4c0 .7-.5 1.2-1.2 1.2H7.3c-3.3 0-6 2.7-6 6v25.3c0 3.3 2.7 6 6 6h49.4c3.3 0 6-2.7 6-6V23.8c.1-1.6-.6-3.1-1.7-4.2zm-1.8 29.5c0 1.4-1.1 2.5-2.5 2.5H7.3c-1.4 0-2.5-1.1-2.5-2.5V23.8c0-1.4 1.1-2.5 2.5-2.5h6.9c2.6 0 4.7-2.1 4.7-4.7v-4.2H45v4.2c0 2.6 2.1 4.7 4.7 4.7h7c.7 0 1.3.3 1.8.7.5.5.7 1.1.7 1.8v25.3z"/>
		<path d="M31.6 16.8c-8.8 0-16 7.2-16 16.2 0 8.9 7 15.9 16 15.9 8.8 0 16-7.1 16-15.9s-7.4-16.2-16-16.2zm0 28.6C24.5 45.4 19 40 19 33s5.6-12.7 12.5-12.7C38.3 20.3 44 26.1 44 33c.1 6.8-5.5 12.4-12.4 12.4z"/>
		<path d="M32 26.6c-.7-.3-1.4-.4-2.2-.4-1.4 0-2.8.5-3.8 1.5-1.1 1-1.7 2.4-1.8 4 0 1.6.6 3.2 1.7 4.3l4.1 4.1c.5.5 1.2.8 2 .8s1.4-.3 2-.8l4.3-4.3c1.1-1.1 1.7-2.5 1.7-4s-.6-2.9-1.7-4c-1.8-1.6-4.3-2.1-6.3-1.2zm3.7 6.8L32 37.1l-3.6-3.6c-.5-.5-.7-1.1-.7-1.8 0-.6.2-1.1.6-1.5.4-.4.9-.6 1.4-.6.4 0 .8.1 1.2.4.6.4 1.4.4 2 0 .8-.6 2-.5 2.7.3.4.4.6.9.6 1.5.1.6-.1 1.1-.5 1.6z"/>
	</g>
</svg>
	);
};

export default CameraWedding;