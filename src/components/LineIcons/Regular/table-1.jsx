import React from 'react';

function Table1(props) {
	const title = props.title || "table 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 20c0-8-15.8-12.4-30.7-12.4S1.3 12 1.3 20c0 7.7 14.6 12 29 12.4v16.7c-1.3 1.7-3.6 3.8-5 3.8-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c2.7 0 5.2-2.3 6.8-4 1.6 1.7 4.2 4 6.8 4 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-1.4 0-3.7-2.1-5.1-3.8V32.4c14.3-.3 28.9-4.7 28.9-12.4zM4.8 20c0-4.2 11.7-8.9 27.3-8.9s27.2 4.7 27.2 8.9-11.7 8.9-27.3 8.9S4.8 24.2 4.8 20z"/>
	</g>
</svg>
	);
};

export default Table1;