import React from 'react';

function Sidebar(props) {
	const title = props.title || "sidebar";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.9c.1-4.2-3.3-7.6-7.5-7.6zm-50.4 54V8.9c0-2.2 1.8-4 4-4h33v54.5h-33c-2.2-.1-4-1.9-4-4.1zm54.5 0c0 2.2-1.8 4-4 4h-9.9V4.8h9.9c2.2 0 4 1.8 4 4v46.5z"/>
	</g>
</svg>
	);
};

export default Sidebar;