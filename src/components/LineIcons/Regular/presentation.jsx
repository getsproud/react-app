import React from 'react';

function Presentation(props) {
	const title = props.title || "presentation";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 5.2H6c-2.6 0-4.8 2.1-4.8 4.8v6.8c0 1 .8 1.8 1.8 1.8h.8v21.7c0 2.6 2.1 4.8 4.8 4.8h21.7v6.6l-5.1 4.2c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l4.6-3.8 4.6 3.8c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-5.1-4.2v-6.6h21.7c2.6 0 4.8-2.1 4.8-4.8V18.4h.7c1 0 1.8-.8 1.8-1.8V9.9c0-2.6-2.2-4.7-4.8-4.7zM4.8 9.9c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v5h-.7H5.6 4.8v-5zm51.9 30.3c0 .7-.6 1.3-1.3 1.3h-47c-.7 0-1.3-.6-1.3-1.3V18.4h49.5v21.8z"/>
	</g>
</svg>
	);
};

export default Presentation;