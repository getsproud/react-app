import React from 'react';

function Panel2(props) {
	const title = props.title || "panel 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.9c.1-4.2-3.3-7.6-7.5-7.6zm4.1 7.6v13.4h-14V4.8h9.9c2.2 0 4.1 1.9 4.1 4.1zm-14 16.9h13.9v15.4H45.3V25.8zM4.8 55.3V8.9c0-2.2 1.8-4 4-4h33v54.5h-33c-2.2-.1-4-1.9-4-4.1zm50.4 4h-9.9V44.6h13.9v10.7c.1 2.2-1.8 4-4 4z"/>
	</g>
</svg>
	);
};

export default Panel2;