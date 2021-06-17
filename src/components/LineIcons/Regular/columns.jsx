import React from 'react';

function Columns(props) {
	const title = props.title || "columns";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 20.8H8.8c-4.2 0-7.5 3.4-7.5 7.5v21.8c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V28.4c.1-4.2-3.3-7.6-7.5-7.6zM4.8 50.1V28.4c0-2.2 1.8-4 4-4h21.5v29.8H8.8c-2.2 0-4-1.8-4-4.1zm54.5 0c0 2.2-1.8 4-4 4H33.8V24.3h21.5c2.2 0 4 1.8 4 4v21.8z"/>
		<path d="M3 9.8h58c1 0 1.8-.8 1.8-1.8S62 6.3 61 6.3H3c-1 0-1.8.8-1.8 1.8S2 9.8 3 9.8z"/>
	</g>
</svg>
	);
};

export default Columns;