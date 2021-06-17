import React from 'react';

function CornerDoubleUpRight(props) {
	const title = props.title || "corner double up right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.6 8.9c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5L40 22c.1.1.1.2.2.3H8.6c-4 0-7.3 3.3-7.3 7.3V54c0 1 .8 1.8 1.8 1.8S4.9 55 4.9 54V29.6c0-2.1 1.7-3.8 3.8-3.8h31.6c-.2.1-.3.2-.3.2l-9.1 10.8c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l9.1-10.8c2.1-2.5 2.1-6.1 0-8.6l-9-10.8z"/>
		<path d="M61.2 19.7L52.1 8.9c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5L58.5 22c1 1.2 1 2.9 0 4.1l-9.1 10.8c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l9.1-10.8c2.2-2.6 2.2-6.2.1-8.7z"/>
	</g>
</svg>
	);
};

export default CornerDoubleUpRight;