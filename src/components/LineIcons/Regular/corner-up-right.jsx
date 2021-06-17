import React from 'react';

function CornerUpRight(props) {
	const title = props.title || "corner up right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.9 16.1l-12-14.3c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l12 14.3c.3.4.6.8.8 1.3H13.3c-5 0-9.1 4.1-9.1 9.1V61c0 1 .8 1.8 1.8 1.8S7.7 62 7.7 61V28.8c0-3.1 2.5-5.6 5.6-5.6H56c-.2.5-.4.9-.8 1.3l-12 14.3c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l12-14.3c2.7-3.1 2.7-7.6.1-10.7z"/>
	</g>
</svg>
	);
};

export default CornerUpRight;