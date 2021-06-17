import React from 'react';

function ArrowUp(props) {
	const title = props.title || "arrow up";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44 8.7L34.9 1C33.2-.4 30.7-.4 29 1l-9 7.7c-.6.5-.7 1.5-.2 2.1.5.6 1.5.7 2.1.2l8.6-7.2v58.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V3.8l8.6 7.2c.3.2.6.4 1 .4s.9-.2 1.1-.5c.6-.7.5-1.7-.2-2.2z"/>
	</g>
</svg>
	);
};

export default ArrowUp;