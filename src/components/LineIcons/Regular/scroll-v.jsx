import React from 'react';

function ScrollV(props) {
	const title = props.title || "scroll v";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 21.5c-5.8 0-10.5 4.7-10.5 10.5S26.2 42.5 32 42.5 42.5 37.8 42.5 32 37.8 21.5 32 21.5zM32 39c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/>
		<path d="M41.7 51.7l-8.4 7c-.8.6-1.9.6-2.7 0l-8.4-7c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l8.4 7c1 .9 2.3 1.3 3.6 1.3 1.3 0 2.5-.4 3.6-1.3l8.4-7c.7-.6.8-1.7.2-2.5-.5-.7-1.6-.8-2.4-.2z"/>
		<path d="M22.3 12.3l8.4-7c.8-.6 1.9-.6 2.7 0l8.4 7c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-8.4-7a5.72 5.72 0 0 0-7.2 0l-8.4 7c-.7.6-.8 1.7-.2 2.5.6.7 1.8.8 2.5.2z"/>
	</g>
</svg>
	);
};

export default ScrollV;