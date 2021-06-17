import React from 'react';

function ArrowTarget1(props) {
	const title = props.title || "arrow target 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.2 23.7h-1.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.4c1.1 0 2 .9 2 2v13H12.8v-13c0-1.1.9-2 2-2h.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-.8c-3 0-5.5 2.5-5.5 5.5v21.1c0 2.3 1.9 4.3 4.3 4.3h13.2l-.8 4.7h-4.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h21.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H38l-.7-4.7h13.2c2.3 0 4.3-1.9 4.3-4.3V29.2c-.1-3-2.5-5.5-5.6-5.5zM34.5 59.3h-5l.7-4.7h3.6l.7 4.7zm16-8.2h-37c-.4 0-.8-.3-.8-.8v-4.6h38.5v4.6c0 .4-.3.8-.7.8z"/>
		<path d="M33 32.2c6.4 0 11.5-5.2 11.5-11.5 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.8 0 1.6.1 2.3.3.9.3 1.9-.3 2.2-1.2.3-.9-.3-1.9-1.2-2.2-1.1-.3-2.2-.5-3.3-.5-6.4 0-11.5 5.2-11.5 11.5S26.6 32.2 33 32.2z"/>
		<path d="M32.9 18.5c-.7.6-.8 1.7-.2 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4l12.1-10.7H53c1 0 1.8-.8 1.8-1.8S54 7 53 7h-4.5V3c0-1-.8-1.8-1.8-1.8S45 2 45 3v4.8L32.9 18.5z"/>
		<path d="M30.8 20.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 3.1 2.5 5.7 5.7 5.7 1 0 1.8-.8 1.8-1.8s-.7-1.8-1.7-1.8c-1.2 0-2.2-.9-2.2-2.1z"/>
	</g>
</svg>
	);
};

export default ArrowTarget1;