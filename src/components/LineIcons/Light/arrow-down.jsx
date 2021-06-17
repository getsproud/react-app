import React from 'react';

function ArrowDown(props) {
	const title = props.title || "arrow down";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.2 53.2c-.5-.6-1.5-.7-2.1-.2l-8.6 7.2V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v58.7L21.9 53c-.6-.5-1.6-.5-2.1.2-.5.6-.5 1.6.2 2.1l9.1 7.6c.8.7 1.9 1.1 2.9 1.1s2.1-.4 2.9-1.1l9.1-7.6c.7-.5.8-1.5.2-2.1z"/>
	</g>
</svg>
	);
};

export default ArrowDown;