import React from 'react';

function ArrowsExpandLeftAlt(props) {
	const title = props.title || "arrows expand left alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.5 23c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L8.4 5.9h.1l13.1-1.1c1-.1 1.7-.9 1.6-1.9-.1-1-.9-1.7-1.9-1.6L8.2 2.4c-3.1.3-5.5 2.7-5.8 5.8L1.3 21.3c-.1 1 .6 1.8 1.6 1.9h.2c.9 0 1.7-.7 1.7-1.6L5.9 8.5v-.1L20.5 23z"/>
		<path d="M61.2 40.8c-1-.1-1.8.6-1.9 1.6l-1.1 13.1v.1L43.5 41c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l14.6 14.6h-.1l-13.1 1.1c-1 .1-1.7.9-1.6 1.9.1.9.8 1.6 1.7 1.6h.2l13.1-1.1c3.1-.3 5.5-2.7 5.8-5.8l1.1-13.1c.1-1-.6-1.8-1.5-1.9z"/>
		<path d="M43.4 20.6c-.7-.7-1.8-.7-2.5 0L20.6 40.9c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5s.9-.2 1.2-.5l20.3-20.3c.8-.7.8-1.8.1-2.5z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandLeftAlt;