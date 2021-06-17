import React from 'react';

function Sidebar1(props) {
	const title = props.title || "sidebar 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zM4.8 55.2V8.8c0-2.2 1.8-4 4-4h8.9v54.5H8.8c-2.2 0-4-1.9-4-4.1zm54.5 0c0 2.2-1.8 4-4 4h-34V4.8h34c2.2 0 4 1.8 4 4v46.4z"/>
	</g>
</svg>
	);
};

export default Sidebar1;