import React from 'react';

function VectorPen(props) {
	const title = props.title || "vector pen";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.4 50H48l2.7-12.1c.1-.3 0-.7-.1-1L33.3.8c-.3-.5-.8-.8-1.4-.8-.6 0-1.1.3-1.4.9l-17.2 36c-.1.3-.2.6-.1 1L15.8 50h-4.3c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h40.9c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.6-1.5-1.5-1.5zM32 31.3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM30.5 8v20.6c-2 .6-3.5 2.5-3.5 4.7 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.2-1.5-4.1-3.5-4.7V8.2l14.3 29.6-2.7 12H18.9l-2.6-12L30.5 8zm20.4 53H13.1v-8H51v8z"/>
	</g>
</svg>
	);
};

export default VectorPen;