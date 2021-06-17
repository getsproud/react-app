import React from 'react';

function Table3(props) {
	const title = props.title || "table 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.2 24.1L49.4 12.8c-.3-.3-.7-.4-1.2-.4H15.8c-.4 0-.8.2-1.2.4L1.8 24.1c-.5.5-.7 1.3-.5 1.9.3.7.9 1.1 1.6 1.1h6.5v22.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1h4.8v13.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1h21.3v13.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1H51v22.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V27.1H61c.7 0 1.4-.5 1.6-1.1.3-.7.1-1.5-.4-1.9zm-54.6-.5l8.8-7.8h31.1l8.8 7.8H7.6z"/>
	</g>
</svg>
	);
};

export default Table3;