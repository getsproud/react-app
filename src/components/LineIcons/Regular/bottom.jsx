import React from 'react';

function Bottom(props) {
	const title = props.title || "bottom";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zM8.8 4.8h46.4c2.2 0 4 1.8 4 4v31.6H4.8V8.8c0-2.2 1.8-4 4-4zm30.9 39.1v15.3H24.3V43.9h15.4zM4.8 55.2V43.9h16.1v15.3h-12c-2.3.1-4.1-1.8-4.1-4zm50.4 4.1h-12V43.9h16.1v11.3c0 2.2-1.9 4.1-4.1 4.1z"/>
	</g>
</svg>
	);
};

export default Bottom;