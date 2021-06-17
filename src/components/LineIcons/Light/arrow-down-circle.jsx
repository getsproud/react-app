import React from 'react';

function ArrowDownCircle(props) {
	const title = props.title || "arrow down circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M39.4 43.6l-5.9 4.2V15.4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v32.5l-5.9-4.2c-.7-.5-1.6-.3-2.1.3-.5.7-.3 1.6.3 2.1l6.7 4.8c.7.5 1.6.8 2.5.8.9 0 1.7-.3 2.5-.8l6.7-4.8c.7-.5.8-1.4.3-2.1-.5-.7-1.5-.8-2.1-.4z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ArrowDownCircle;