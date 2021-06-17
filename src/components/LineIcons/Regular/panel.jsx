import React from 'react';

function Panel(props) {
	const title = props.title || "panel";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zm4.1 7.5v11.3H33.8V4.8h21.5c2.1 0 4 1.8 4 4zM4.8 36V23.6h25.5V36H4.8zm29-12.4h25.5V36H33.8V23.6zM8.8 4.8h21.5v15.4H4.8V8.8c0-2.2 1.8-4 4-4zm46.4 54.5H8.8c-2.2 0-4-1.8-4-4V39.5h54.5v15.7c0 2.2-1.9 4.1-4.1 4.1z"/>
	</g>
</svg>
	);
};

export default Panel;