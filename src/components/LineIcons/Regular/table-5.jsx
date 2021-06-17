import React from 'react';

function Table5(props) {
	const title = props.title || "table 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.8 18.2c0-4.9-4-8.8-8.8-8.8H10.1c-4.9 0-8.8 4-8.8 8.8 0 4.7 3.8 8.6 8.4 8.8v25.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27h5v16.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27h20.6v16.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27h5v25.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27c4.3-.2 8.1-4.1 8.1-8.8zm-8.9 5.3H10.1c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3H54c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.4 5.3z"/>
	</g>
</svg>
	);
};

export default Table5;