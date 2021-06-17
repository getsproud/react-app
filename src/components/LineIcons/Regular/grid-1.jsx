import React from 'react';

function Grid1(props) {
	const title = props.title || "grid 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.9c.1-4.2-3.3-7.6-7.5-7.6zm4.1 7.6v11.9H33.8v-16h21.5c2.1 0 4 1.9 4 4.1zM33.8 24.3h25.5v15.5H33.8V24.3zm-3.5 15.6H4.8V24.3h25.5v15.6zM8.8 4.8h21.5v16H4.8V8.9c0-2.2 1.8-4.1 4-4.1zm-4 50.5V43.4h25.5v16H8.8c-2.2-.1-4-1.9-4-4.1zm50.4 4H33.8v-16h25.5v11.9c0 2.3-1.9 4.1-4.1 4.1z"/>
	</g>
</svg>
	);
};

export default Grid1;