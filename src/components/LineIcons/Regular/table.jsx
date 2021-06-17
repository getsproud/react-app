import React from 'react';

function Table(props) {
	const title = props.title || "table";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zM8.8 4.8h46.4c2.2 0 4 1.8 4 4v12.8H4.8V8.8c0-2.2 1.8-4 4-4zm14.8 35.6V25h16.8v15.4H23.6zm16.8 3.5v15.3H23.6V43.9h16.8zm-20.3-3.5H4.8V25h15.4v15.4zM43.9 25h15.3v15.4H43.9V25zM4.8 55.2V43.9h15.4v15.3H8.8c-2.2.1-4-1.8-4-4zm50.4 4.1H43.9V43.9h15.3v11.3c.1 2.2-1.8 4.1-4 4.1z"/>
	</g>
</svg>
	);
};

export default Table;