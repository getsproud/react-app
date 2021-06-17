import React from 'react';

function ArrowsExpandDownRight(props) {
	const title = props.title || "arrows expand down right";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.1 37c-1-.1-1.8.6-1.9 1.6l-1.4 15.9c0 .3-.1.5-.2.8l-25.9-26c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l25.9 25.9c-.3.1-.5.1-.8.2l-15.9 1.4c-1 .1-1.7.9-1.6 1.9.1.9.8 1.6 1.7 1.6h.2l15.9-1.4c3.5-.3 6.3-3.1 6.6-6.6l1.4-15.9c.1-1-.6-1.8-1.5-1.9z"/>
		<path d="M18.2 1.3H6.1C3.5 1.3 1.3 3.4 1.3 6v12.1c0 2.6 2.1 4.8 4.8 4.8h12.1c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.2-4.7-4.8-4.7zm1.3 16.8c0 .7-.6 1.3-1.3 1.3H6.1c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h12.1c.7 0 1.3.6 1.3 1.3v12.1z"/>
	</g>
</svg>
	);
};

export default ArrowsExpandDownRight;