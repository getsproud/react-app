import React from 'react';

function Panel4(props) {
	const title = props.title || "panel 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zM8.8 4.8h21.5v25.5H4.8V8.8c0-2.2 1.8-4 4-4zm-4 50.4V33.8h25.5v25.5H8.8c-2.2 0-4-1.9-4-4.1zm54.5 0c0 2.2-1.8 4-4 4H33.8V4.8h21.5c2.2 0 4 1.8 4 4v46.4z"/>
	</g>
</svg>
	);
};

export default Panel4;