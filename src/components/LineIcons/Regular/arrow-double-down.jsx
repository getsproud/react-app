import React from 'react';

function ArrowDoubleDown(props) {
	const title = props.title || "arrow double down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.9 54.4l-3.1 2.9V36.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v20.9l-3.1-2.9c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l5.4 5.1c.5.5 1.2.7 1.8.7.7 0 1.3-.2 1.9-.7l5.4-5.1c.7-.7.7-1.8.1-2.5-.6-.8-1.7-.8-2.4-.1z"/>
		<path d="M30.2 28.6c.5.5 1.2.7 1.8.7.7 0 1.3-.2 1.9-.7l5.4-5.1c.7-.7.7-1.8.1-2.5-.7-.7-1.8-.7-2.5-.1l-3.1 2.9V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v20.9L27.1 21c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l5.5 5z"/>
	</g>
</svg>
	);
};

export default ArrowDoubleDown;