import React from 'react';

function Rows1(props) {
	const title = props.title || "rows 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.2 1.3H8.8c-4.2 0-7.5 3.4-7.5 7.5v46.4c0 4.2 3.4 7.5 7.5 7.5h46.4c4.2 0 7.5-3.4 7.5-7.5V8.8c.1-4.2-3.3-7.5-7.5-7.5zm4.1 7.5v22.9H33.8v-27h21.5c2.1.1 4 1.9 4 4.1zm-50.5-4h21.5v27H4.8v-23c0-2.2 1.8-4 4-4zm46.4 54.5H8.8c-2.2 0-4-1.8-4-4v-20h54.5v20c0 2.1-1.9 4-4.1 4z"/>
	</g>
</svg>
	);
};

export default Rows1;