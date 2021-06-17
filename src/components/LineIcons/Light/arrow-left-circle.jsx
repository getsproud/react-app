import React from 'react';

function ArrowLeftCircle(props) {
	const title = props.title || "arrow left circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.6 30.5H16.1l4.2-5.9c.5-.7.3-1.6-.3-2.1-.7-.5-1.6-.3-2.1.3l-4.8 6.7a4.2 4.2 0 0 0 0 5l4.8 6.7c.3.4.8.6 1.2.6.3 0 .6-.1.9-.3.7-.5.8-1.4.3-2.1l-4.2-5.9h32.5c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.3 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ArrowLeftCircle;